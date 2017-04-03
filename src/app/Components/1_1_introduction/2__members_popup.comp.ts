/**
 * Created by Hyeonmin on 2017-03-27.
 */

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-members-popup',
  templateUrl: '2__members_popup.comp.html',
  styleUrls: ['../../Styles/1_1_2_members.css'],
})
export class MembersPopupComponent implements OnInit {
  @Input() popupOnInput;
  @Input() personIdInput;

  windowHeight = 0;
  popupLeft = 0;
  // popupOn: boolean;
  // personId: string;
  @Output() popupOnOut = new EventEmitter<boolean>();
  hidePopup(): void {
    this.popupOnInput = false;
    this.popupOnOut.emit(false);
  }

  ngOnInit(): void {
    this.windowHeight = window.innerHeight;
    this.popupLeft = (window.innerWidth - 1070) / 2;
  }
}
