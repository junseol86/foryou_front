/**
 * Created by Hyeonmin on 2017-03-16.
 */

import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {MenuService} from '../../Services/menu.service';
import {MonthlyJournalService} from '../../Services/monthly_journal.service';
import {Schedule} from '../../Models/MonthlyJournal';
import {ComponentWithAccount} from '../component_with_account';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-monthly-journal',
  templateUrl: '1_monthly_journal.comp.html',
  styleUrls: ['../../Styles/1_3_1_monthly_journal.css'],
})

export class MonthlyJournalComponent extends ComponentWithAccount implements OnInit {
  private menuIdx = 2;
  private subMenuIdx = 0;

  date = new Date();

  // 현재 선택된 년, 월
  thisYear: number;
  thisMonth: number;

  // 오늘의 실제 월,일
  todayMonth: number;
  todayDate: number;

  // 일정을 수정할 날짜
  dateToModify: number;

  thisMonthLength: number;
  lastMonthLength: number;
  firstWeekday: number;
  lastMonthDays: number[];
  thisMonthDays: number[];
  nextMonthDays: number[];
  schedules: Schedule[][] = [];

  contentToUpload = '';
  setContentUpload(content: string) {
    this.contentToUpload = content;
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private menuService: MenuService,
    private monthlyJournalService: MonthlyJournalService
  ) {
    super();
  }

  ngOnInit(): void {
    this.todayDate = this.date.getDate();
    this.todayMonth = this.date.getMonth() + 1;
    this.clearDays();
    this.activatedRoute.params.subscribe((params: Params) => {

      this.thisYear = params['year'];
      this.thisMonth = params['month'];
      this.thisMonthLength = new Date(this.thisYear, this.thisMonth, 0).getDate();

      for (let i = 0; i < this.thisMonthLength; i++) {
        this.thisMonthDays.push(i + 1);
      }

      this.firstWeekday = new Date(this.thisYear, this.thisMonth - 1, 1).getDay();
      this.lastMonthLength = new Date(this.thisYear, this.thisMonth - 1, 0).getDate();
      for (let i = 0; i < this.firstWeekday; i++) {
        this.lastMonthDays.push(this.lastMonthLength - this.firstWeekday + i + 1);
      }

      for (let i = 0; i < 7 - ((this.lastMonthDays.length + this.thisMonthDays.length) % 7); i++) {
        this.nextMonthDays.push(i + 1);
      }

      this.getSchedules();
    });

  }

  clearDays() {
    this.lastMonthDays = [];
    this.thisMonthDays = [];
    this.nextMonthDays = [];
  }

  nextMonth() {
    this.clearDays();

    let yearToGo: number;
    let monthToGo: number;
    if (this.thisMonth === 12) {
      yearToGo = this.thisYear;
      yearToGo++;
      monthToGo = 1;
    } else {
      yearToGo = this.thisYear;
      monthToGo = this.thisMonth;
      monthToGo++;
    }

    this.router.navigate([
      '/' + this.menuService.menus[this.menuIdx].link + '/'
      + this.menuService.menus[this.menuIdx].sub_menus[this.subMenuIdx].link
      + '/' + yearToGo + '/' + monthToGo],
      {replaceUrl: true});
  }

  prevMonth(): void {
    this.clearDays();

    let yearToGo: number;
    let monthToGo: number;
    if (this.thisMonth === 1) {
      yearToGo = this.thisYear;
      yearToGo--;
      monthToGo = 12;
    } else {
      yearToGo = this.thisYear;
      monthToGo = this.thisMonth;
      monthToGo--;
    }

    this.router.navigate(['/' + this.menuService.menus[this.menuIdx].link
    + '/' + this.menuService.menus[this.menuIdx].sub_menus[this.subMenuIdx].link
    + '/' + yearToGo + '/' + monthToGo], {replaceUrl: true});
  }

  getSchedules() {
    this.monthlyJournalService.getSchedules(this.thisYear, this.thisMonth)
      .then(schedules => this.afterGetSchedules(schedules));
  }
  afterGetSchedules(schedules: Schedule[]) {
    this.schedules = [];
    for (let i = 0; i < 31; i++) {
      this.schedules.push([]);
    }
    for (const schedule of schedules) {
      this.schedules[schedule['monthly_journal.date']].push(schedule);
    }
  }

  showModifyPopup(date: number): void {
    this.dateToModify = date;
    this.contentToUpload = '';

    $('#popup').css('left', ($(window).width() - 1056) / 2 + 'px');
    $('#popup').css('height', $(window).height() + 'px');
    $('#modify_schedule').css('margin-top', ($('#popup').height() - $('#modify_schedule').height()) / 2 + 'px');
    $('#popup').css('display', 'block');
  }

  closeModifyPopup(): void {
    $('#popup').css('display', 'none');
  }

  addSchedule() {
    if (this.contentToUpload.trim() === '') {
      alert('내용을 입력해주세요.');
      return;
    }

    if (this.schedules[this.dateToModify].length > 3) {
      alert('일당 4건까지 가능합니다.');
      return;
    }

    this.monthlyJournalService.addSchedule(
      this.thisYear, this.thisMonth, this.dateToModify, this.contentToUpload,
      this.login_result.selector, this.login_result.validator)
      .then(result => this.afterAddSchedule(result));
  }
  afterAddSchedule(result: Object) {
    if (result['success'] !== true) {
      alert('오류가 발생했습니다.  다시 시도해 주세요.');
      return;
    }
    this.schedules[this.dateToModify] = result['schedules'];
    this.contentToUpload = '';
  }

}
