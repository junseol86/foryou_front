/**
 * Created by Hyeonmin on 2017-03-13.
 */

import {Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'members',
  templateUrl: '2_members.comp.html',
  styleUrls: ['../../Styles/1_1_2_members.css'],
})

export class _1_2_MembersComponent implements OnInit {

  private menuIdx:number = 0;
  private subMenuIdx:number = 1;
  private popupOn: boolean = false;
  private personId: string = '';

  constructor (
    private router: Router,
  ) {
  }

  ngOnInit():void {
}

  navigateTo(address: string): void {
    this.router.navigate([address])
  }

  showMemberPopup(id: string):void {
    this.popupOn = true;
    this.personId = id;
  }
  hidePopup():void {
    this.popupOn = false;
  }

  branches = [

    {
      name: '본점',
      personnel: [
        {
          id: 'yi-kwang-woo',
          pic: '/app/Images/other/member_yi-kwang-woo.jpg',
          position: '회장',
          name: '이광우'
        },
      ]
    },
    {
      name: '분당지점',
      personnel: [
        {
          id: 'cho-ki-yong',
          pic: '/app/Images/other/member_cho-ki-yong.jpg',
          position: '대표세무사',
          name: '조기용'
        },
        {
          id: 'jung-jin-yong',
          pic: '/app/Images/other/member_jung-jin-yong.jpg',
          position: '소속세무사',
          name: '정진용'
        }
      ]
    },
    {
      name: '화성지점',
      personnel: [
        {
          id: 'yi-cheon-gil',
          pic: '/app/Images/other/member_yi-cheon-gil.jpg',
          position: '대표세무사',
          name: '이천길'
        }
      ]
    },
    {
      name: '경주지점',
      personnel: [
        {
          id: 'yi-tae-ya',
          pic: '/app/Images/other/member_yi-tae-ya.jpg',
          position: '대표세무사',
          name: '이태야'
        },
        {
          id: 'kim-hyeon-seok',
          pic: '/app/Images/other/member_kim-hyeon-seok.jpg',
          position: '소속세무사',
          name: '김현석'
        }
      ]
    },
    {
      name: '포항지점',
      personnel: [
        {
          id: 'song-cheol-han',
          pic: '/app/Images/other/member_song-cheol-han.jpg',
          position: '대표세무사',
          name: '송철한'
        },
        {
          id: 'yoon-jin-seok',
          pic: '/app/Images/other/member_yoon-jin-seok.jpg',
          position: '대표사무사',
          name: '윤진석'
        }
      ]
    }
  ]

}
