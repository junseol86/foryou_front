/**
 * Created by Hyeonmin on 2017-03-13.
 */

import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-left-wing',
  templateUrl: 'left.comp.html',
  styleUrls: ['../../Styles/0_accessories.css']
})
export class LeftComponent  {
  constructor(
    private router: Router
  ) { }

  goTo(address: String): void {
    this.router.navigate([`${address}`]);
  }

  goToLink(link:string) {
    window.open(link, '_blank');
  }
}
