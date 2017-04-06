"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var top_comp_1 = require("./Components/0_top/top.comp");
var left_comp_1 = require("./Components/0_accessories/left.comp");
var right_comp_1 = require("./Components/0_accessories/right.comp");
var footer_comp_1 = require("./Components/0_accessories/footer.comp");
var sub_menu_comp_1 = require("./Components/0_accessories/sub_menu.comp");
var dashboard_comp_1 = require("./Components/1_0_dashboard/dashboard.comp");
var _1_greeting_comp_1 = require("./Components/1_1_introduction/1_greeting.comp");
var _2_members_comp_1 = require("./Components/1_1_introduction/2_members.comp");
var _1_tax_representative_comp_1 = require("./Components/1_2_fields/1_tax_representative.comp");
var _2_property_tax_comp_1 = require("./Components/1_2_fields/2_property_tax.comp");
var _3_tax_protest_comp_1 = require("./Components/1_2_fields/3_tax_protest.comp");
var _4_management_support_comp_1 = require("./Components/1_2_fields/4_management_support.comp");
var _5_management_consulting_comp_1 = require("./Components/1_2_fields/5_management_consulting.comp");
var fields_detail_comp_1 = require("./Components/1_2_fields/fields_detail.comp");
var fields_write_comp_1 = require("./Components/1_2_fields/fields_write.comp");
var _1_monthly_journal_comp_1 = require("./Components/1_3_tax_info/1_monthly_journal.comp");
var _2_tax_news_comp_1 = require("./Components/1_3_tax_info/2_tax_news.comp");
var _2_tax_news_write_comp_1 = require("./Components/1_3_tax_info/2_tax_news_write.comp");
var _2_tax_news_detail_comp_1 = require("./Components/1_3_tax_info/2_tax_news_detail.comp");
var _1_consulting_apply_comp_1 = require("./Components/1_4_online_consulting/1_consulting_apply.comp");
var _2_faq_comp_1 = require("./Components/1_4_online_consulting/2_faq.comp");
var _1__slogan_desc_comp_1 = require("./Components/1_1_introduction/1__slogan_desc.comp");
var _2__members_popup_comp_1 = require("./Components/1_1_introduction/2__members_popup.comp");
var _1__schedule_popup_comp_1 = require("./Components/1_3_tax_info/1__schedule_popup.comp");
var common_service_1 = require("./Services/common.service");
var account_service_1 = require("./Services/account.service");
var fields_service_1 = require("./Services/fields.service");
var monthly_journal_service_1 = require("./Services/monthly_journal.service");
var tax_news_service_1 = require("./Services/tax_news.service");
var faq_service_1 = require("./Services/faq.service");
var values_service_1 = require("./Services/values.service");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent,
            top_comp_1.TopComponent,
            left_comp_1.LeftComponent, right_comp_1.RightComponent, footer_comp_1.FooterComponent, sub_menu_comp_1.SubMenuComponent,
            dashboard_comp_1.DashboardComponent,
            _1_greeting_comp_1.GreetingComponent, _2_members_comp_1.MembersComponent,
            _1__slogan_desc_comp_1.SloganDescComponent,
            _2__members_popup_comp_1.MembersPopupComponent,
            _1_tax_representative_comp_1.TaxRepresentativeComponent, _2_property_tax_comp_1.PropertyTaxComponent, _3_tax_protest_comp_1.TaxProtestComponent, _4_management_support_comp_1.ManagementSupportComponent, _5_management_consulting_comp_1.ManagementConsultingComponent,
            fields_detail_comp_1.FieldsDetailComponent,
            fields_write_comp_1.FieldsWriteComponent,
            _1_monthly_journal_comp_1.MonthlyJournalComponent,
            _2_tax_news_comp_1.TaxNewsComponent, _2_tax_news_detail_comp_1.TaxNewsDetailComponent, _2_tax_news_write_comp_1.TaxNewsWriteComponent,
            _1__schedule_popup_comp_1.SchedulePopupComponent,
            _1_consulting_apply_comp_1.ConsultingApplyComponent,
            _2_faq_comp_1.FaqComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [account_service_1.AccountService, common_service_1.CommonService, fields_service_1.FieldsService, monthly_journal_service_1.MonthlyJournalService, tax_news_service_1.TaxNewsService, faq_service_1.FaqService,
            cookies_service_1.CookieService, values_service_1.ValueService]
    })
], AppModule);
exports.AppModule = AppModule;
