import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { MenuService } from "../../Services/menu.service";

@Component({
  moduleId: module.id,
  selector: 'top',
  templateUrl: 'top.comp.html',
  styleUrls: ['../../Styles/0_top.css']
})
export class TopComponent {
  menus: Object[];

  constructor(
    private router: Router,
    private menuService: MenuService
  ) {
    this.menus = menuService.menus;
  }

  navigateTo(address: string): void {
    this.router.navigate([address])
  }

}
