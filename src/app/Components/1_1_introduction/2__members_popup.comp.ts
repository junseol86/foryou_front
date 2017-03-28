/**
 * Created by Hyeonmin on 2017-03-27.
 */

import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'members_popup',
  templateUrl: '2__members_popup.comp.html',
  styleUrls: ['../../Styles/1_1_2_members.css'],
  inputs:['popupOn', 'personId']
})
export class MembersPopupComponent implements OnInit {

  windowHeight:number = 0;
  popupLeft: number = 0;
  popupOn: boolean;
  personId: string;
  @Output() popupOnOut = new EventEmitter<boolean>();
  hidePopup():void {
    this.popupOn = false;
    this.popupOnOut.emit(false);
  }

  ngOnInit():void {
    this.windowHeight = window.innerHeight;
    this.popupLeft = (window.innerWidth - 1070) / 2;
  }
}
