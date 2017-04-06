/**
 * Created by Hyeonmin on 2017-04-03.
 */

import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {ComponentWithAccount} from '../component_with_account';
import {CommonService} from '../../Services/common.service';
import {TaxNewsService} from '../../Services/tax_news.service';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-tax-news-detail',
  templateUrl: '2_tax_news_detail.comp.html',
  styleUrls: ['../../Styles/1_3_2_tax_news.css'],
})

export class TaxNewsDetailComponent extends ComponentWithAccount implements OnInit {
  private menuIdx = 2;
  private subMenuIdx = 1;

  id: number;
  detail: Object;
  content: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private taxNewsService: TaxNewsService,
    private commonService: CommonService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = Number(params['id']);
      this.getDetail();
    });
  }

  getDetail(): void {
    this.commonService.getDetail('tax_news', this.id)
      .then(result => this.afterGettingDetail(result));
  }
  afterGettingDetail(detail: Object): void {
    this.detail = detail;
    this.detail['tagsArray'] = this.detail['tax_news.tags'].split(' ');
    this.content = detail['tax_news.content'];
    $.getScript('/app/Scripts/image_process.js');
  }

  searchWord(search: string): void {
    this.router.navigate([`tax_info/tax_news/${search}/0`]);
  }

  goToModifyPage(): void {
    this.router.navigate([`tax_info/tax_news_write/${this.detail['tax_news.id']}/`]);
  }

  deleteTaxNews(): void {
    if (confirm('이 글을 삭제하시겠습니까?')) {
      this.taxNewsService.deleteTaxNews(this.id, this.login_result.selector, this.login_result.validator)
        .then(result => this.afterDeletingTaxNews(result));
    }
  }
  afterDeletingTaxNews(result: Object): void {
    if (result['success'] === true) {
      alert('글이 삭제되었습니다.');
      this.router.navigate(['tax_info/tax_news/@/0']);
    } else {
      alert('오류가 발생했습니다.  다시 시도해주세요.');
    }
  }
}

