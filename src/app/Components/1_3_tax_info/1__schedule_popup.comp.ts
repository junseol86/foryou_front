/**
 * Created by Hyeonmin on 2017-03-27.
 */

import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'schedule_popup',
  template: `
    <div id="popup" ngClass="{{popupOn ? '-on' : ''}}"
         [ngStyle]="{'height':windowHeight + 'px', 'left': popupLeft + 'px'}"
    >
      <div id="modify_schedule"
           [ngStyle]="{'margin-top':(windowHeight - 307)/2 + 'px'}"
      >
        <div id="title">
          {{thisYear}}년 {{thisMonth}}월 {{dateToModify}}일
          <div class="close" (click)="closeModifyPopup()"><i class="fa fa-times" aria-hidden="true"></i></div>
        </div>
        <div id="schedules" *ngIf="dateToModify != undefined">
          <div class="schedule" *ngFor="let schedule of schedules[dateToModify]">
            {{schedule['monthly_journal.content']}}
            <div class="delete"><i class="fa fa-times" aria-hidden="true"></i></div>
          </div>
        </div>
        <div id="insert">
          <input #content type="text" maxlength="20" value="{{contentToUpload}}" (change)="setContentUpload(content.value)">
          <div id="enter" (click)="addSchedule()">
            <i class="fa fa-upload" aria-hidden="true"></i>
            올리기
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../../Styles/1_3_1_monthly_journal.css'],
  inputs: ['popupOn']
})
export class _1_3__SchedulePopupComponent implements OnInit {

  popupOn: number;
  windowHeight:number = 0;
  popupLeft: number = 0;

  ngOnInit():void {
    this.windowHeight = window.innerHeight;
    this.popupLeft = (window.innerWidth - 1070) / 2;
  }
}
