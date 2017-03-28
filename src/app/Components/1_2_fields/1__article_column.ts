/**
 * Created by Hyeonmin on 2017-03-27.
 */

import {AfterViewChecked, Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'article_column',
  template: `
    <div class="article" *ngFor="let article of articles">
      <div class="date">
        {{article['date']}}
      </div>
      <div class="title">
        {{article['title']}}
      </div>
      <div class="tag" *ngFor="let tag of article['tagsArray']"><i class="fa fa-tag" aria-hidden="true"></i> {{tag}}</div>
    </div>
  `,
  styleUrls: ['../../Styles/1_2_fields.css'],
  inputs: ['articles']
})
export class _2__ArticleColumnComponent {

  articles: Object[];
}
