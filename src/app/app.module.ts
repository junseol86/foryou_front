import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";

import { AppComponent }  from './app.component';
import { TopComponent } from './Components/0_top/top.comp'
import { LeftComponent } from './Components/0_accessories/left.comp'
import { RightComponent } from './Components/0_accessories/right.comp'
import { FooterComponent } from './Components/0_accessories/footer.comp'
import { SubMenuComponent } from './Components/0_accessories/sub_menu.comp'

import { DashboardComponent } from './Components/1_0_dashboard/dashboard.comp'
import {_1_1_GreetingComponent} from './Components/1_1_introduction/1_greeting.comp';
import {_1_2_MembersComponent} from './Components/1_1_introduction/2_members.comp';
import {TaxRepresentativeComponent} from './Components/1_2_fields/1_tax_representative.comp';
import {_3_1_MonthlyJournalComponent} from './Components/1_3_tax_info/1_monthly_journal.comp';

import { AccountService } from './Services/account.service';
import { MonthlyJournalService } from './Services/monthly_journal.service';
import { ValueService } from './Services/values.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import {_1_1__SloganDescComponent} from './Components/1_1_introduction/1__slogan_desc.comp';
import {_1_2__MembersPopupComponent} from './Components/1_1_introduction/2__members_popup.comp';
import {_2__ArticleColumnComponent} from './Components/1_2_fields/1__article_column';
import {_1_3__SchedulePopupComponent} from './Components/1_3_tax_info/1__schedule_popup.comp';


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule ],
  declarations: [ AppComponent,
    TopComponent,
    LeftComponent, RightComponent, FooterComponent, SubMenuComponent,
    DashboardComponent,
    _1_1_GreetingComponent, _1_2_MembersComponent,
    _1_1__SloganDescComponent,
    _1_2__MembersPopupComponent,
    TaxRepresentativeComponent,
    _2__ArticleColumnComponent,
    _3_1_MonthlyJournalComponent,
    _1_3__SchedulePopupComponent,
  ],
  bootstrap: [ AppComponent ],
  providers: [AccountService, MonthlyJournalService,
    CookieService, ValueService]
})
export class AppModule { }
