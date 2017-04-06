/**
 * Created by Hyeonmin on 2017-04-03.
 */

import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {ComponentWithAccount} from '../component_with_account';
import {CommonService} from '../../Services/common.service';
import {FieldsService} from '../../Services/fields.service';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-fields-detail',
  templateUrl: 'fields_detail.comp.html',
  styleUrls: ['../../Styles/1_2_fields.css'],
})

export class FieldsDetailComponent extends ComponentWithAccount implements OnInit {

  id: number;
  detail: Object;
  content: string;

  private menuIdx: number;
  private subMenuIdx: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fieldsService: FieldsService,
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
    this.commonService.getDetail('fields', this.id)
      .then(result => this.afterGettingDetail(result));
  }
  afterGettingDetail(detail: Object): void {
    this.detail = detail;
    this.detail['tagsArray'] = this.detail['fields.tags'].split(' ');
    this.content = detail['fields.content'];
    if ('fields.id' in this.detail) {
      this.menuIdx = 1;
      switch (this.detail['fields.submenu']) {
        case 'tax_representative': this.subMenuIdx = 0; break;
        case 'property_tax': this.subMenuIdx = 1; break;
        case 'tax_protest': this.subMenuIdx = 2; break;
        case 'management_support': this.subMenuIdx = 3; break;
        case 'management_consulting': this.subMenuIdx = 4; break;
      }
      if ('tax_news.id' in this.detail) {
        this.menuIdx = 2;
        this.subMenuIdx = 1;
      }
    }
    $.getScript('/app/Scripts/image_process.js');
  }

  searchWord(search: string): void {
    this.router.navigate([`fields/${this.detail['fields.submenu']}/${search}/0`]);
  }

  goToModifyPage(): void {
    this.router.navigate([`fields/write/${this.detail['fields.submenu']}/${this.detail['fields.id']}/`]);
  }

  deleteFields(): void {
    if (confirm('이 글을 삭제하시겠습니까?')) {
      this.fieldsService.deleteFields(this.id, this.login_result.selector, this.login_result.validator)
        .then(result => this.afterDeletingFields(result));
    }
  }
  afterDeletingFields(result: Object): void {
    if (result['success'] === true) {
      alert('글이 삭제되었습니다.');
      this.router.navigate(['/fields/' + this.detail['fields.submenu'] + '/@/0']);
    } else {
      alert('오류가 발생했습니다.  다시 시도해주세요.');
    }
  }
}

