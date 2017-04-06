/**
 * Created by Hyeonmin on 2017-03-30.
 */

import {OnInit} from '@angular/core';
import {ComponentWithAccount} from '../component_with_account';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FieldsService} from '../../Services/fields.service';
import {ListAndTotal} from '../../Models/List';

declare var $: any;

export class FieldsComponent extends ComponentWithAccount implements OnInit {

  private articles: Object[];
  page: number;
  pages: number[] = [];
  search: string;
  field_descs = [
    ['개인 및 법인의 장부작성 및 재무재표 작성', '법인세, 소득세, 부가가치세 신고'],
    ['양도소득세 자문 및 신고', '증여세, 상속세 자문 및 신고'],
    ['억울한 세금에 대한 불복절차 진행', '과세전적부심사, 이의신청, 심사청구, 심판청구'],
    ['법인설립 및 법인전환', '내부관리구조 수립 및 재무시스템 확립', '기업부설연구소 및 벤처기업인증'],
    ['각종 볍에서 정하는 기업진단 업무']
  ];

  constructor (
    private activatedRoute: ActivatedRoute,
    private fieldsService: FieldsService,
    private router: Router,
    private submenu: string
  ) {
    super();
  }
  getFields(): void {
    this.fieldsService.getFields(this.submenu, this.page, this.search)
      .then(result => this.afterGettingFields(result));
  }
  afterGettingFields(fieldsAndTotal: ListAndTotal) {
    this.articles = fieldsAndTotal.list;
    this.articles.forEach(function(article, idx) {
      article['tagsArray'] = article['fields.tags'] !== '' ? article['fields.tags'].split(' ') : [];
    });
    this.pages = this.setPages(fieldsAndTotal.pageSize, fieldsAndTotal.total);
    $.getScript('/app/Scripts/1_2_fields.js');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.page = Number(params['page']);
      this.search = params['search'];
      this.getFields();
    });
  }

  goToWritePage(submenu: string): void {
    this.router.navigate(['fields/write/' + submenu + '/write']);
  }

  setPages(pageSize: number, total: number): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= Math.floor(total / pageSize) + 1; i++) {
      pages.push(i);
    }
    return pages;
  }

  moveToPage(page: number): void {
    this.router.navigate([`fields/${this.submenu}/${this.search}/${page - 1}`]);
  }

  searchWord(search: string, event: Event): void {
    event.stopPropagation();
    this.router.navigate([`fields/${this.submenu}/${search}/0`]);
  }
  searchWordEnter(search: string, event: Event) {
    if (event['key'] === 'Enter') {
      this.searchWord(search, event);
    }
  }

  toDetail(id: number): void  {
    this.router.navigate(['fields/detail/' + id]);
  }

}
