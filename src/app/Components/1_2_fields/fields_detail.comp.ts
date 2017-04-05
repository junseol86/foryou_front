/**
 * Created by Hyeonmin on 2017-04-03.
 */

import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {ComponentWithAccount} from '../component_with_account';
import {CommonService} from '../../Services/common.service';

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

  private menuIdx = 1;
  private subMenuIdx: number;

  constructor(
    private activatedRoute: ActivatedRoute,
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
    switch (this.detail['fields.submenu']) {
      case 'tax_representative': this.subMenuIdx = 0; break;
      case 'property_tax': this.subMenuIdx = 1; break;
      case 'tax_protest': this.subMenuIdx = 2; break;
      case 'management_support': this.subMenuIdx = 3; break;
      case 'management_consulting': this.subMenuIdx = 4; break;
    }
  }

  searchWord(search: string): void {
    this.router.navigate([`fields/${this.detail['fields.submenu']}/${search}/0`]);
  }

  goToModifyPage(): void {
    this.router.navigate([`fields/write/${this.detail['fields.submenu']}/${this.detail['fields.id']}/`]);
  }
}

