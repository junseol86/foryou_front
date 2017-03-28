import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { TopComponent } from './Components/0_top/top.comp';
import { LeftComponent } from './Components/0_accessories/left.comp';
import { RightComponent } from './Components/0_accessories/right.comp';
import { FooterComponent } from './Components/0_accessories/footer.comp';
import { SubMenuComponent } from './Components/0_accessories/sub_menu.comp';

import { DashboardComponent } from './Components/1_0_dashboard/dashboard.comp';
import { GreetingComponent } from './Components/1_1_introduction/1_greeting.comp';
import { MembersComponent } from './Components/1_1_introduction/2_members.comp';
import { TaxRepresentativeComponent } from './Components/1_2_fields/1_tax_representative.comp';
import { MonthlyJournalComponent } from './Components/1_3_tax_info/1_monthly_journal.comp';
import { ConsultingApplyComponent } from './Components/1_4_online_consulting/1_consulting_apply.comp';
import { FaqComponent } from './Components/1_4_online_consulting/2_faq.comp';

import { AccountService } from './Services/account.service';
import { MonthlyJournalService } from './Services/monthly_journal.service';
import { ValueService } from './Services/values.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { SloganDescComponent } from './Components/1_1_introduction/1__slogan_desc.comp';
import { MembersPopupComponent } from './Components/1_1_introduction/2__members_popup.comp';
import { SchedulePopupComponent } from './Components/1_3_tax_info/1__schedule_popup.comp';


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule ],
  declarations: [ AppComponent,
    TopComponent,
    LeftComponent, RightComponent, FooterComponent, SubMenuComponent,
    DashboardComponent,
    GreetingComponent,  MembersComponent ,
    SloganDescComponent,
    MembersPopupComponent,
    TaxRepresentativeComponent,
    MonthlyJournalComponent,
    SchedulePopupComponent,
    ConsultingApplyComponent,
    FaqComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [AccountService, MonthlyJournalService,
    CookieService, ValueService]
})
export class AppModule { }
