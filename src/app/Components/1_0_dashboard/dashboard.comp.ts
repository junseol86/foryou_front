/**
 * Created by Hyeonmin on 2017-03-09.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ComponentWithAccount} from '../component_with_account';
import {CommonService} from '../../Services/common.service';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.comp.html',
  styleUrls: ['../../Styles/1_0_dashboard.css'],
})

export class DashboardComponent implements OnInit {

  articles: Object;

  constructor(
    private commonService: CommonService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getArticles();
  }
  getArticles(): void {
    this.commonService.getDashboardArticles()
      .then(result => this.afterGettingArticles(result));
  }
  afterGettingArticles(result: Object): void {
    console.log(result);
    this.articles = result;
  }

  toFieldsDetail(id: number): void  {
    this.router.navigate(['fields/detail/' + id]);
  }

  toTaxNewsDetail(id: number): void  {
    this.router.navigate(['tax_info/tax_news_detail/' + id]);
  }

  toQnas(): void {
    this.router.navigate(['online_consulting/consulting_apply']);
  }
}
