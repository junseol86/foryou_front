/**
 * Created by Hyeonmin on 2017-03-15.
 */

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {MockService} from '../../Services/mock.service';
import {ComponentWithAccount} from '../component_with_account';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-tax-representative',
  templateUrl: '1_tax_representative.comp.html',
  styleUrls: ['../../Styles/1_2_fields.css'],
})

export class TaxRepresentativeComponent extends ComponentWithAccount implements OnInit {

  private menuIdx = 1;
  private subMenuIdx = 0;

  private articles: Object[];

  constructor (
    private router: Router,
    private mockService: MockService
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

}
