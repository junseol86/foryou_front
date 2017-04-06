/**
 * Created by Hyeonmin on 2017-03-09.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var dashboard_comp_1 = require("./Components/1_0_dashboard/dashboard.comp");
var menu_service_1 = require("./Services/menu.service");
var _1_greeting_comp_1 = require("./Components/1_1_introduction/1_greeting.comp");
var _2_members_comp_1 = require("./Components/1_1_introduction/2_members.comp");
var _1_tax_representative_comp_1 = require("./Components/1_2_fields/1_tax_representative.comp");
var _2_property_tax_comp_1 = require("./Components/1_2_fields/2_property_tax.comp");
var _3_tax_protest_comp_1 = require("./Components/1_2_fields/3_tax_protest.comp");
var _4_management_support_comp_1 = require("./Components/1_2_fields/4_management_support.comp");
var _5_management_consulting_comp_1 = require("./Components/1_2_fields/5_management_consulting.comp");
var fields_detail_comp_1 = require("./Components/1_2_fields/fields_detail.comp");
var fields_write_comp_1 = require("./Components/1_2_fields/fields_write.comp");
var mock_service_1 = require("./Services/mock.service");
var _1_monthly_journal_comp_1 = require("./Components/1_3_tax_info/1_monthly_journal.comp");
var _2_tax_news_comp_1 = require("./Components/1_3_tax_info/2_tax_news.comp");
var _2_tax_news_detail_comp_1 = require("./Components/1_3_tax_info/2_tax_news_detail.comp");
var _2_tax_news_write_comp_1 = require("./Components/1_3_tax_info/2_tax_news_write.comp");
var _1_consulting_apply_comp_1 = require("./Components/1_4_online_consulting/1_consulting_apply.comp");
var _2_faq_comp_1 = require("./Components/1_4_online_consulting/2_faq.comp");
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_comp_1.DashboardComponent },
    { path: 'introduction/greeting', component: _1_greeting_comp_1.GreetingComponent },
    { path: 'introduction/members', component: _2_members_comp_1.MembersComponent },
    { path: 'fields/:submenu', redirectTo: 'fields/:submenu/@/0', pathMatch: 'full' },
    { path: 'fields/tax_representative/:search/:page', component: _1_tax_representative_comp_1.TaxRepresentativeComponent },
    { path: 'fields/property_tax/:search/:page', component: _2_property_tax_comp_1.PropertyTaxComponent },
    { path: 'fields/tax_protest/:search/:page', component: _3_tax_protest_comp_1.TaxProtestComponent },
    { path: 'fields/management_support/:search/:page', component: _4_management_support_comp_1.ManagementSupportComponent },
    { path: 'fields/management_consulting/:search/:page', component: _5_management_consulting_comp_1.ManagementConsultingComponent },
    { path: 'fields/detail/:id', component: fields_detail_comp_1.FieldsDetailComponent },
    { path: 'fields/write/:submenu/:mode', component: fields_write_comp_1.FieldsWriteComponent },
    { path: 'tax_info/monthly_journal',
        redirectTo: 'tax_info/monthly_journal/' + new Date().getFullYear() + '/' + (Number(new Date().getMonth()) + 1), pathMatch: 'full' },
    { path: 'tax_info/monthly_journal/:year/:month', component: _1_monthly_journal_comp_1.MonthlyJournalComponent },
    { path: 'tax_info/tax_news', redirectTo: 'tax_info/tax_news/@/0' },
    { path: 'tax_info/tax_news/:search/:page', component: _2_tax_news_comp_1.TaxNewsComponent },
    { path: 'tax_news/write/:mode', component: _2_tax_news_write_comp_1.TaxNewsWriteComponent },
    { path: 'tax_news/detail/:id', component: _2_tax_news_detail_comp_1.TaxNewsDetailComponent },
    { path: 'online_consulting/consulting_apply', redirectTo: 'online_consulting/consulting_apply/@/1' },
    { path: 'online_consulting/consulting_apply/:search/:page', component: _1_consulting_apply_comp_1.ConsultingApplyComponent },
    { path: 'online_consulting/faq', redirectTo: 'online_consulting/faq/0' },
    { path: 'online_consulting/faq/:page', component: _2_faq_comp_1.FaqComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule],
        providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, menu_service_1.MenuService, mock_service_1.MockService]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
