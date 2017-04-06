/**
 * Created by Hyeonmin on 2017-04-05.
 */

import {Component, OnInit} from '@angular/core';
import {ComponentWithAccount} from '../component_with_account';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ListAndTotal} from '../../Models/List';
import { TaxNewsService } from '../../Services/tax_news.service';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-news',
  templateUrl: '2_tax_news.comp.html',
  styleUrls: ['../../Styles/1_3_2_tax_news.css'],
})

export class TaxNewsComponent extends ComponentWithAccount implements OnInit {
  private menuIdx = 2;
  private subMenuIdx = 1;

  private articles: Object[];
  page: number;
  pages: number[] = [];
  search: string;

  constructor (
    private activatedRoute: ActivatedRoute,
    private taxNewsService: TaxNewsService,
    private router: Router,
  ) {
    super();
  }

  getTaxNews(): void {
    this.taxNewsService.getTaxNews(this.page, this.search)
      .then(result => this.afterGettingTaxNews(result));
  }
  afterGettingTaxNews(taxNewsAndTotal: ListAndTotal) {
    this.articles = taxNewsAndTotal.list;
    this.articles.forEach(function(article, idx) {
      article['tagsArray'] = article['tax_news.tags'] !== '' ? article['tax_news.tags'].split(' ') : [];
    });
    this.pages = this.setPages(taxNewsAndTotal.pageSize, taxNewsAndTotal.total);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.page = Number(params['page']);
      this.search = params['search'];
      this.getTaxNews();
    });
  }

  goToWritePage(): void {
    this.router.navigate(['tax_info/tax_news_write/write']);
  }

  setPages(pageSize: number, total: number): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= Math.floor(total / pageSize) + 1; i++) {
      pages.push(i);
    }
    return pages;
  }

  moveToPage(page: number): void {
    this.router.navigate([`tax_info/tax_news/${this.search}/${page - 1}`]);
  }

  searchWord(search: string, event: Event): void {
    event.stopPropagation();
    this.router.navigate([`tax_info/tax_news/${search}/0`]);
  }
  searchWordEnter(search: string, event: Event) {
    if (event['key'] === 'Enter') {
      this.searchWord(search, event);
    }
  }

  toDetail(id: number): void  {
    this.router.navigate(['tax_info/tax_news_detail/' + id]);
  }

}
