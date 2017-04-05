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

  setPages(pageSize: number, total: number): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= Math.floor(total / pageSize) + 1; i++) {
      pages.push(i);
    }
    return pages;
  }

  goToWritePage(submenu: String): void {
    this.router.navigate(['fields/write/' + submenu + '/write']);
  }

  moveToPage(page: number): void {
    this.router.navigate([`fields/${this.submenu}/${this.search}/${page}`]);
  }

  searchWord(search: string, event: Event): void {
    event.stopPropagation();
    this.router.navigate([`fields/${this.submenu}/${search}/0`]);
  }

  toDetail(id: number): void  {
    this.router.navigate(['fields/detail/' + id]);
  }

}
