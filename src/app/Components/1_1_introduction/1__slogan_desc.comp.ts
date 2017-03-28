/**
 * Created by Hyeonmin on 2017-03-27.
 */

import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'slogan_desc',
  template: `
    <div #slogan_desc id="slogan_desc" class="_c_align">
      <p>
        <span id="english">{{slogan_descs[selectedInitial]['english']}}</span> : <span id="korean">{{slogan_descs[selectedInitial]['korean']}}</span>
      </p>
      <div id="desc">{{slogan_descs[selectedInitial]['desc']}}</div>
    </div>
  `,
  styleUrls: ['../../Styles/1_1_1_greeting.css'],
  inputs:['selectedInitial']
})
export class SloganDescComponent implements OnInit {
  selectedInitial:number = 0;


  ngOnInit():void {
  }

  slogan_descs = [
    {
      english: 'Facilitate',
      korean: '가능하게 하다',
      desc: '안 되면 될 때까지, 무한한 가능성을 보여드립니다.'
    },
    {
      english: 'Offer',
      korean: '제의하다, 권하다',
      desc: '고객에게 맞추어 좋은 것을 제안하며 최선의 것을 권할 것입니다.',
    },
    {
      english: 'Recognised',
      korean: '인정받는',
      desc: '머지 않아 모두에게 인정받게 될 것입니다.',
    },
    {
      english: 'You',
      korean: '당신',
      desc: '당신이',
    },
    {
      english: 'Obtain',
      korean: '얻다',
      desc: '추구하는 것을 얻을 때까지',
    },
    {
      english: 'Undertake',
      korean: '약속하다',
      desc: '늘 당신과 함께할 것을 약속합니다.',
    }
  ];

}
