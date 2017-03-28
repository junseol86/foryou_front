/**
 * Created by Hyeonmin on 2017-03-16.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var menu_service_1 = require("../../Services/menu.service");
var monthly_journal_service_1 = require("../../Services/monthly_journal.service");
var component_with_account_1 = require("../component_with_account");
var MonthlyJournalComponent = (function (_super) {
    __extends(MonthlyJournalComponent, _super);
    function MonthlyJournalComponent(router, activatedRoute, menuService, monthlyJournalService) {
        _super.call(this);
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.menuService = menuService;
        this.monthlyJournalService = monthlyJournalService;
        this.menuIdx = 2;
        this.subMenuIdx = 0;
        this.popupOn = false;
        this.date = new Date();
        this.schedules = [];
        this.contentToUpload = '';
    }
    MonthlyJournalComponent.prototype.setContentUpload = function (content) {
        this.contentToUpload = content;
    };
    MonthlyJournalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todayDate = this.date.getDate();
        this.todayMonth = this.date.getMonth() + 1;
        this.clearDays();
        this.activatedRoute.params.subscribe(function (params) {
            _this.thisYear = params['year'];
            _this.thisMonth = params['month'];
            _this.thisMonthLength = new Date(_this.thisYear, _this.thisMonth, 0).getDate();
            for (var i = 0; i < _this.thisMonthLength; i++) {
                _this.thisMonthDays.push(i + 1);
            }
            _this.firstWeekday = new Date(_this.thisYear, _this.thisMonth - 1, 1).getDay();
            _this.lastMonthLength = new Date(_this.thisYear, _this.thisMonth - 1, 0).getDate();
            for (var i = 0; i < _this.firstWeekday; i++) {
                _this.lastMonthDays.push(_this.lastMonthLength - _this.firstWeekday + i + 1);
            }
            for (var i = 0; i < 7 - ((_this.lastMonthDays.length + _this.thisMonthDays.length) % 7); i++) {
                _this.nextMonthDays.push(i + 1);
            }
            _this.getSchedules();
        });
    };
    MonthlyJournalComponent.prototype.clearDays = function () {
        this.lastMonthDays = [];
        this.thisMonthDays = [];
        this.nextMonthDays = [];
    };
    MonthlyJournalComponent.prototype.nextMonth = function () {
        this.clearDays();
        var yearToGo;
        var monthToGo;
        if (this.thisMonth == 12) {
            yearToGo = this.thisYear;
            yearToGo++;
            monthToGo = 1;
        }
        else {
            yearToGo = this.thisYear;
            monthToGo = this.thisMonth;
            monthToGo++;
        }
        this.router.navigate(['/' + this.menuService.menus[this.menuIdx].link + '/' + this.menuService.menus[this.menuIdx].sub_menus[this.subMenuIdx].link + '/' + yearToGo + '/' + monthToGo], { replaceUrl: true });
    };
    MonthlyJournalComponent.prototype.prevMonth = function () {
        this.clearDays();
        var yearToGo;
        var monthToGo;
        if (this.thisMonth == 1) {
            yearToGo = this.thisYear;
            yearToGo--;
            monthToGo = 12;
        }
        else {
            yearToGo = this.thisYear;
            monthToGo = this.thisMonth;
            monthToGo--;
        }
        this.router.navigate(['/' + this.menuService.menus[this.menuIdx].link + '/' + this.menuService.menus[this.menuIdx].sub_menus[this.subMenuIdx].link + '/' + yearToGo + '/' + monthToGo], { replaceUrl: true });
    };
    MonthlyJournalComponent.prototype.getSchedules = function () {
        var _this = this;
        this.monthlyJournalService.getSchedules(this.thisYear, this.thisMonth)
            .then(function (schedules) { return _this.afterGetSchedules(schedules); });
    };
    MonthlyJournalComponent.prototype.afterGetSchedules = function (schedules) {
        this.schedules = [];
        for (var i = 0; i < 31; i++) {
            this.schedules.push([]);
        }
        for (var _i = 0, schedules_1 = schedules; _i < schedules_1.length; _i++) {
            var schedule = schedules_1[_i];
            this.schedules[schedule['monthly_journal.date']].push(schedule);
        }
    };
    MonthlyJournalComponent.prototype.showModifyPopup = function (date) {
        this.dateToModify = date;
        this.contentToUpload = '';
        this.popupOn = true;
    };
    MonthlyJournalComponent.prototype.closeModifyPopup = function () {
        this.popupOn = false;
    };
    MonthlyJournalComponent.prototype.addSchedule = function () {
        var _this = this;
        if (this.contentToUpload.trim() == '') {
            alert('내용을 입력해주세요.');
            return;
        }
        if (this.schedules[this.dateToModify].length > 3) {
            alert('일당 4건까지 가능합니다.');
            return;
        }
        this.monthlyJournalService.addSchedule(this.thisYear, this.thisMonth, this.dateToModify, this.contentToUpload, this.login_result.selector, this.login_result.validator)
            .then(function (result) { return _this.afterAddSchedule(result); });
    };
    MonthlyJournalComponent.prototype.afterAddSchedule = function (result) {
        if (result['success'] != true) {
            alert('오류가 발생했습니다.  다시 시도해 주세요.');
            return;
        }
        this.schedules[this.dateToModify] = result['schedules'];
        this.contentToUpload = '';
    };
    MonthlyJournalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'monthly_journal',
            templateUrl: '1_monthly_journal.comp.html',
            styleUrls: ['../../Styles/1_3_1_monthly_journal.css'],
        }),
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, menu_service_1.MenuService, monthly_journal_service_1.MonthlyJournalService])
    ], MonthlyJournalComponent);
    return MonthlyJournalComponent;
}(component_with_account_1.ComponentWithAccount));
exports.MonthlyJournalComponent = MonthlyJournalComponent;
//# sourceMappingURL=1_monthly_journal.comp.js.map
