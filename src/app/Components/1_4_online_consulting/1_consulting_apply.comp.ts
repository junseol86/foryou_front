/**
 * Created by Hyeonmin on 2017-03-28.
 */

import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {MenuService} from '../../Services/menu.service';

import {ComponentWithAccount} from '../component_with_account';

@Component({
  moduleId: module.id,
  selector: 'app-consulting-apply',
  templateUrl: '1_consulting_apply.comp.html',
  styleUrls: ['../../Styles/1_4_1_consulting_apply.css'],
})

export class ConsultingApplyComponent extends ComponentWithAccount implements OnInit {
  private menuIdx = 3;
  private subMenuIdx = 0;

  ngOnInit() {

  }

}
