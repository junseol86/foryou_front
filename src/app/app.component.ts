import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
      <!--<div id="outer_wrapper">-->
          <!--<router-outlet></router-outlet>-->
      <!--</div>-->
    <!--<top></top>-->
    <!--<under-top></under-top>-->
    <router-outlet></router-outlet>
`,
})
export class AppComponent  {
}
