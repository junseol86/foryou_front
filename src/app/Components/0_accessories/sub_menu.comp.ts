/**
 * Created by Hyeonmin on 2017-03-13.
 */

import { Component, Input } from '@angular/core';
import { MenuService } from "../../Services/menu.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'sub_menu',
  templateUrl: 'sub_menu.comp.html',
  styleUrls: ['../../Styles/0_accessories.css']
})
export class SubMenuComponent  {
  menus: Object[];

  @Input() menuIdx: number;
  @Input() subMenuIdx: number;

  constructor(
    private menuService: MenuService,
    private router: Router
  ) {
    this.menus = menuService.menus;
  }

  navigateTo(address: string): void {
    this.router.navigate([address])
  }

}
