/**
 * Created by Hyeonmin on 2017-03-30.
 */

import {OnInit} from '@angular/core';
import {MockService} from '../../Services/mock.service';
import {ComponentWithAccount} from '../component_with_account';
import { Router } from '@angular/router';

declare var $: any;


export class FieldsComponent extends ComponentWithAccount implements OnInit {

  private articles: Object[];

  constructor (
    mockService: MockService,
    protected router: Router
  ) {
    super();
    this.articles = mockService.fields_articles;
    this.articles.forEach(function(article, idx) {
      article['tagsArray'] = article['tags'] !== '' ? article['tags'].split(' ') : [];
    });
  }

  ngOnInit(): void {
    $.getScript('/app/Scripts/1_2_fields.js');
  }

  goToWritePage(): void {
    this.router.navigate(['fields/write']);
  }

}
