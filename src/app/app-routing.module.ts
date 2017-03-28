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
import {TaxRepresentativeComponent} from './Components/1_2_fields/1_tax_representative.comp';
import {MockService} from './Services/mock.service';
import {MonthlyJournalComponent} from './Components/1_3_tax_info/1_monthly_journal.comp';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'introduction/greeting',  component: GreetingComponent },
  { path: 'introduction/members',  component:  MembersComponent  },
  { path: 'fields/tax_representative', redirectTo: 'fields/tax_representative/@/1', pathMatch: 'full' },
  { path: 'fields/tax_representative/:search/:page',  component: TaxRepresentativeComponent },
  { path: 'tax_info/monthly_journal',
    redirectTo: 'tax_info/monthly_journal/' + new Date().getFullYear() + '/' + (Number(new Date().getMonth()) + 1), pathMatch: 'full' },
  { path: 'tax_info/monthly_journal/:year/:month',  component: MonthlyJournalComponent }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, MenuService, MockService]
})

export class AppRoutingModule {}
