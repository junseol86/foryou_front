/**
 * Created by Hyeonmin on 2017-04-03.
 */

import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {ComponentWithAccount} from '../component_with_account';
import {CommonService} from '../../Services/common.service';
import {unescape} from "querystring";

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService
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
    this.content = detail['fields.content'];
  }

}

