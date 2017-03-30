/**
 * Created by Hyeonmin on 2017-03-28.
 */

import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {MenuService} from '../../Services/menu.service';

import {ComponentWithAccount} from '../component_with_account';
import {FaqService} from '../../Services/faq.service';
import {ListAndTotal} from '../../Models/List';

declare var $: any;

const CREATE = 0;
const MODIFY = 1;

@Component({
  moduleId: module.id,
  selector: 'app-faq',
  templateUrl: '2_faq.comp.html',
  styleUrls: ['../../Styles/1_4_2_faq.css'],
})

export class FaqComponent extends ComponentWithAccount implements OnInit {
  private menuIdx = 3;
  private subMenuIdx = 1;


  faqs: Object[] = [];
  page: number;
  pages: number[] = [];
  articles_on: number[] = [];
  articleToModify: number;
  writing = false;
  createOrModify = CREATE;

  topicToSend: string;
  questionToSend: string;
  answerToSend: string;

  setTopicToSend(topic: string): void {
    this.topicToSend = topic;
  }
  setQuestionToSend(question: string): void {
    this.questionToSend = question;
  }
  setAnswerToSend(answer: string): void {
    this.answerToSend = answer;
  }
  clearAllToSend(): void {
    this.topicToSend = '';
    this.questionToSend = '';
    this.answerToSend = '';
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private faqService: FaqService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.writing = false;
    this.faqs = [];
    this.activatedRoute.params.subscribe((params: Params) => {
      this.page = Number(params['page']);
      this.getFaqs(this.page);
    });
  }

  getFaqs(page: number) {
    this.faqService.getFaqs(page).then(faqsAndTotal => this.afterGettingFaqs(faqsAndTotal));
  }
  afterGettingFaqs(faqsAndTotal: ListAndTotal) {
    this.faqs = faqsAndTotal.list;
    this.pages = this.setPages(faqsAndTotal.pageSize, faqsAndTotal.total);
    $.getScript('/app/Scripts/1_4_2_faq.js');
  }

  articleOnOff(id: number): void {
    const idx = this.articles_on.indexOf(id);
    if (idx < 0) {
      this.articles_on.push(id);
    } else {
      this.articles_on.splice(idx, 1);
    }
  }

  setPages(pageSize: number, total: number): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= Math.floor(total / pageSize) + 1; i++) {
      pages.push(i);
    }
    return pages;
  }

  newFaq(): void {
    this.createOrModify = CREATE;
    this.setWriting(true);
    this.clearAllToSend();
  }
  modifyFaq(faq: Object, event): void {
    this.articleToModify = faq['faq.id'];
    this.topicToSend = faq['faq.topic'];
    this.questionToSend = faq['faq.question'];
    this.answerToSend = faq['faq.answer'];
    event.stopPropagation();
    this.createOrModify = MODIFY;
    this.setWriting(true);
    window.scroll(0, -10000);
  }
  setWriting(set: boolean): void {
    this.writing = set;
  }

  submitFaq(): void {
    if (this.createOrModify === CREATE) {
      this.faqService.addFaq(
        this.topicToSend, this.questionToSend, this.answerToSend, this.login_result.selector, this.login_result.validator)
        .then(result => this.addFaqResult(result));
    } else {
      this.faqService.modifyFaq(
        this.articleToModify,
        this.topicToSend, this.questionToSend, this.answerToSend, this.login_result.selector, this.login_result.validator)
        .then(result => this.modifyFaqResult(result));
    }
  }
  addFaqResult(result: Object) {
    if (result['success'] === true) {
      this.moveToPage(1);
      this.ngOnInit();
    } else {
      alert('오류가 발생했습니다.  다시 시도해주세요.');
    }
  }
  modifyFaqResult(result: Object) {
    if (result['success'] === true) {
      alert('수정되었습니다.');
      this.ngOnInit();
    } else {
      alert('오류가 발생했습니다.  다시 시도해주세요.');
    }
  }

  deleteFaq(id: number, event: Event): void {
    event.stopPropagation();
    if (confirm('이 항목을 삭제하시겠습니까?')) {
      this.faqService.deleteFaq(id, this.login_result.selector, this.login_result.validator)
        .then(result => this.deleteFaqResult(result));
    }
  }
  deleteFaqResult(result: Object) {
    if (result['success'] === true) {
      this.ngOnInit();
    } else {
      alert('오류가 발생했습니다.  다시 시도해주세요.');
    }
  }

  moveToPage(page: number): void {
    this.router.navigate(['online_consulting/faq/' + (page - 1)]);
  }
}
