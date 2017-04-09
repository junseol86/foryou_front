/**
 * Created by Hyeonmin on 2017-03-28.
 */

import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {ComponentWithAccount} from '../component_with_account';
import {ConsultingApplyService} from '../../Services/consulting_apply.service';
import {ListAndTotal} from '../../Models/List';

@Component({
  moduleId: module.id,
  selector: 'app-consulting-apply',
  templateUrl: '1_consulting_apply.comp.html',
  styleUrls: ['../../Styles/1_4_1_consulting_apply.css'],
})

export class ConsultingApplyComponent extends ComponentWithAccount implements OnInit {
  private menuIdx = 3;
  private subMenuIdx = 0;

  private articles: Object[];
  page: number;
  pages: number[] = [];
  search: string;

  asking = false;

  asker: string;
  email: string;
  password: string;
  password_confirm: string;
  title: string;
  question: string;

  setAsker(val: string) {
    this.asker = val;
  }
  setEmail(val: string) {
    this.email = val;
  }
  setPassword(val: string) {
    this.password = val;
  }
  setPasswordConfirm(val: string) {
    this.password_confirm = val;
  }
  setTitle(val: string) {
    this.title = val;
  }
  setQuestion(val: string) {
    this.question = val;
  }
  clearInputs() {
    this.setAsking(false);
    this.asker = '';
    this. email = '';
    this. password = '';
    this.password_confirm = '';
    this.title = '';
    this.question = '';
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private consultingApplyService: ConsultingApplyService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.page = Number(params['page']);
      this.search = params['search'];
      this.getQnas();
    });
  }

  getQnas(): void {
    this.consultingApplyService.getQnas(this.page, this.search)
      .then(result => this.afterGettingQna(result));
  }
  afterGettingQna(anqAndTotal: ListAndTotal) {
    this.articles = anqAndTotal.list;
    this.pages = this.setPages(anqAndTotal.pageSize, anqAndTotal.total);
  }

  setAsking(val: boolean) {
    this.asking = val;
  }

  submitQuestion() {
    if (this.password !== this.password_confirm) {
      alert('비밀번호를 동일하게 입력하세요.');
      return;
    }
    this.consultingApplyService.writeQna(this.asker, this.email, this.password, this.title, this.question)
      .then(result => this.afterSubmittingQuestion(result));
  }
  afterSubmittingQuestion(result: Object) {
    if (result['success'] === true) {
      alert('질문이 등록되었습니다.');
      this.router.navigate(['online_consulting/consulting_apply/@/0']);
      this.clearInputs();
    } else {
      alert('오류가 발생했습니다.  다시 시도해 주세요.');
    }
  }

  setPages(pageSize: number, total: number): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= Math.floor(total / pageSize) + 1; i++) {
      pages.push(i);
    }
    return pages;
  }

  moveToPage(page: number): void {
    this.router.navigate([`online_consulting/consulting_apply/${this.search}/${page - 1}`]);
  }

  toDetail(id: number): void {
    this.router.navigate([`online_consulting/consulting_apply_detail/${id}`]);
  }
}
