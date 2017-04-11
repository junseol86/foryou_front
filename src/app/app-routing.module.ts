/**
 * Created by Hyeonmin on 2017-03-09.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { DashboardComponent } from './Components/1_0_dashboard/dashboard.comp';
import { MenuService } from './Services/menu.service';
import { GreetingComponent } from './Components/1_1_introduction/1_greeting.comp';
import { MembersComponent } from './Components/1_1_introduction/2_members.comp';
import { TaxRepresentativeComponent } from './Components/1_2_fields/1_tax_representative.comp';
import { PropertyTaxComponent } from './Components/1_2_fields/2_property_tax.comp';
import { TaxProtestComponent } from './Components/1_2_fields/3_tax_protest.comp';
import { ManagementSupportComponent } from './Components/1_2_fields/4_management_support.comp';
import { ManagementConsultingComponent } from './Components/1_2_fields/5_management_consulting.comp';
import { FieldsDetailComponent } from './Components/1_2_fields/fields_detail.comp';
import { FieldsWriteComponent } from './Components/1_2_fields/fields_write.comp';
import { FormsComponent } from './Components/1_6_forms/forms.comp';
import { MapsComponent } from './Components/1_5_directions/maps.comp';

import { MockService} from './Services/mock.service';
import { MonthlyJournalComponent } from './Components/1_3_tax_info/1_monthly_journal.comp';
import { TaxNewsComponent } from './Components/1_3_tax_info/2_tax_news.comp';
import { TaxNewsDetailComponent } from './Components/1_3_tax_info/2_tax_news_detail.comp';
import { TaxNewsWriteComponent } from './Components/1_3_tax_info/2_tax_news_write.comp';
import { ConsultingApplyComponent } from './Components/1_4_online_consulting/1_consulting_apply.comp';
import { ConsultingApplyDetailComponent } from './Components/1_4_online_consulting/1_consulting_apply_detail.comp';
import { FaqComponent } from './Components/1_4_online_consulting/2_faq.comp';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'introduction/greeting',  component: GreetingComponent },
  { path: 'introduction/members',  component:  MembersComponent  },
  { path: 'fields/:submenu', redirectTo: 'fields/:submenu/@/0', pathMatch: 'full' },
  { path: 'fields/tax_representative/:search/:page',  component: TaxRepresentativeComponent },
  { path: 'fields/property_tax/:search/:page',  component: PropertyTaxComponent },
  { path: 'fields/tax_protest/:search/:page',  component: TaxProtestComponent },
  { path: 'fields/management_support/:search/:page',  component: ManagementSupportComponent },
  { path: 'fields/management_consulting/:search/:page',  component: ManagementConsultingComponent },
  { path: 'fields/detail/:id', component: FieldsDetailComponent },

  { path: 'fields/write/:submenu/:mode',  component: FieldsWriteComponent },

  { path: 'tax_info/monthly_journal',
    redirectTo: 'tax_info/monthly_journal/' + new Date().getFullYear() + '/' + (Number(new Date().getMonth()) + 1), pathMatch: 'full' },
  { path: 'tax_info/monthly_journal/:year/:month',  component: MonthlyJournalComponent },
  { path: 'tax_info/tax_news',  redirectTo: 'tax_info/tax_news/@/0' },
  { path: 'tax_info/tax_news/:search/:page',  component: TaxNewsComponent },
  { path: 'tax_info/tax_news_detail/:id', component: TaxNewsDetailComponent },
  { path: 'tax_info/tax_news_write/:mode',  component: TaxNewsWriteComponent },

  { path: 'online_consulting/consulting_apply', redirectTo: 'online_consulting/consulting_apply/@/0' },
  { path: 'online_consulting/consulting_apply/:search/:page', component: ConsultingApplyComponent },
  { path: 'online_consulting/consulting_apply_detail/:id', component: ConsultingApplyDetailComponent },

  { path: 'online_consulting/faq',  redirectTo: 'online_consulting/faq/0' },
  { path: 'online_consulting/faq/:page',  component: FaqComponent },

  { path: 'forms',  component: FormsComponent },
  { path: 'direction',  component: MapsComponent },
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, MenuService, MockService]
})

export class AppRoutingModule {}
