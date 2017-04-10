/**
 * Created by Hyeonmin on 2017-03-13.
 */

import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-right-wing',
  templateUrl: 'right.comp.html',
  styleUrls: ['../../Styles/0_accessories.css']
})
export class RightComponent  {
  constructor(
    private router: Router
  ) { }

  goToLink(link:string) {
    window.open(link, '_blank');
  }
}
