/**
 * Created by Hyeonmin on 2017-04-10.
 */

import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ComponentWithAccount} from '../component_with_account';

declare var $: any;
declare var map: any;
declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'app-forms',
  templateUrl: 'maps.comp.html',
  styleUrls: ['../../Styles/1_5_maps.css', '../../Styles/0_accessories.css'],
})

export class MapsComponent extends ComponentWithAccount {

  branchIdx = 0;
  positions = [
    [37.5494287, 126.9371393, '본점', '서울시 마포구 서강대길 3, 2층'],
    [37.3964667, 127.1078594, '분당지점', '경기 분당시 성남동 판교역로 178'],
    [37.2144243, 126.9726561, '화성지점', '경기 화성시 봉담읍 참샘길 27'],
    [35.8507386, 129.2154031, '경주지점', '경북 경주시 원화로 340'],
    [36.0432152, 129.3636441, '포항지점', '경북 포항시 북구 중앙로 342-1, 3층']
  ];

  lat = this.positions[this.branchIdx][0];
  lng = this.positions[this.branchIdx][1];
  zoom = 16;

  setBranchIdx(idx: number) {
    this.branchIdx = idx;
    this.lat = this.positions[this.branchIdx][0];
    this.lng = this.positions[this.branchIdx][1];
  }

  refresh() {
    location.reload();
  }

}
