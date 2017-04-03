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
import { PropertyTaxComponent } from './Components/1_2_fields/2_property_tax.comp';
import { TaxProtestComponent } from './Components/1_2_fields/3_tax_protest.comp';
import { ManagementSupportComponent } from './Components/1_2_fields/4_management_support.comp';
import { ManagementConsultingComponent } from './Components/1_2_fields/5_management_consulting.comp';
import { FieldsDetailComponent } from './Components/1_2_fields/fields_detail.comp';
import { FieldsWriteComponent } from './Components/1_2_fields/fields_write.comp';

import { MonthlyJournalComponent } from './Components/1_3_tax_info/1_monthly_journal.comp';
import { ConsultingApplyComponent } from './Components/1_4_online_consulting/1_consulting_apply.comp';
import { FaqComponent } from './Components/1_4_online_consulting/2_faq.comp';

import { SloganDescComponent } from './Components/1_1_introduction/1__slogan_desc.comp';
import { MembersPopupComponent } from './Components/1_1_introduction/2__members_popup.comp';
import { SchedulePopupComponent } from './Components/1_3_tax_info/1__schedule_popup.comp';

import { CommonService } from './Services/common.service';
import { AccountService } from './Services/account.service';
import { FieldsService } from './Services/fields.service';
import { MonthlyJournalService } from './Services/monthly_journal.service';
import { FaqService } from './Services/faq.service';
import { ValueService } from './Services/values.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule ],
  declarations: [ AppComponent,
    TopComponent,
    LeftComponent, RightComponent, FooterComponent, SubMenuComponent,
    DashboardComponent,
    GreetingComponent,  MembersComponent ,
    SloganDescComponent,
    MembersPopupComponent,
    TaxRepresentativeComponent, PropertyTaxComponent, TaxProtestComponent, ManagementSupportComponent, ManagementConsultingComponent,
    FieldsDetailComponent,
    FieldsWriteComponent,
    MonthlyJournalComponent,
    SchedulePopupComponent,
    ConsultingApplyComponent,
    FaqComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [AccountService, CommonService, FieldsService, MonthlyJournalService, FaqService,
    CookieService, ValueService]
})
export class AppModule { }
