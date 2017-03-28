/**
 * Created by Hyeonmin on 2017-03-13.
 */

import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'greeting',
  templateUrl: '1_greeting.comp.html',
  styleUrls: ['../../Styles/1_1_1_greeting.css'],
})

export class _1_1_GreetingComponent implements OnInit{

  private menuIdx:number = 0;
  private subMenuIdx:number = 0;
  private selectedInitial: number;

  slogan_initials = ['F', 'O', 'R', 'Y', 'O', 'U'];

  constructor (
  ) {
  }

  ngOnInit():void {
    this.selectedInitial = 0;
  }

  set_slogan(idx: number): void {
    this.selectedInitial = idx;
  }

}
