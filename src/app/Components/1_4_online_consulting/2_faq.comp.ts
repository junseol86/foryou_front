/**
 * Created by Hyeonmin on 2017-03-28.
 */

import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {MenuService} from '../../Services/menu.service';

import {ComponentWithAccount} from '../component_with_account';

@Component({
  moduleId: module.id,
  selector: 'app-faq',
  templateUrl: '2_faq.comp.html',
  styleUrls: ['../../Styles/1_4_2_faq.css'],
})

export class FaqComponent extends ComponentWithAccount implements OnInit {
  private menuIdx = 3;
  private subMenuIdx = 1;

  ngOnInit() {

  }

}
