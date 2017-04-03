/**
 * Created by Hyeonmin on 2017-03-16.
 */
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var component_with_account_1 = require("../component_with_account");
var MonthlyJournalComponent = (function (_super) {
    __extends(MonthlyJournalComponent, _super);
    function MonthlyJournalComponent(router, activatedRoute, menuService, monthlyJournalService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.menuService = menuService;
        _this.monthlyJournalService = monthlyJournalService;
        _this.menuIdx = 2;
        _this.subMenuIdx = 0;
        _this.date = new Date();
        _this.schedules = [];
        _this.contentToUpload = '';
        return _this;
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
        if (this.thisMonth === 12) {
            yearToGo = this.thisYear;
            yearToGo++;
            monthToGo = 1;
        }
        else {
            yearToGo = this.thisYear;
            monthToGo = this.thisMonth;
            monthToGo++;
        }
        this.router.navigate([
            '/' + this.menuService.menus[this.menuIdx].link + '/'
                + this.menuService.menus[this.menuIdx].sub_menus[this.subMenuIdx].link
                + '/' + yearToGo + '/' + monthToGo
        ], { replaceUrl: true });
    };
    MonthlyJournalComponent.prototype.prevMonth = function () {
        this.clearDays();
        var yearToGo;
        var monthToGo;
        if (this.thisMonth === 1) {
            yearToGo = this.thisYear;
            yearToGo--;
            monthToGo = 12;
        }
        else {
            yearToGo = this.thisYear;
            monthToGo = this.thisMonth;
            monthToGo--;
        }
        this.router.navigate(['/' + this.menuService.menus[this.menuIdx].link
                + '/' + this.menuService.menus[this.menuIdx].sub_menus[this.subMenuIdx].link
                + '/' + yearToGo + '/' + monthToGo], { replaceUrl: true });
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
        $('#popup').css('left', ($(window).width() - 1056) / 2 + 'px');
        $('#popup').css('height', $(window).height() + 'px');
        $('#modify_schedule').css('margin-top', ($('#popup').height() - $('#modify_schedule').height()) / 2 + 'px');
        $('#popup').css('display', 'block');
    };
    MonthlyJournalComponent.prototype.closeModifyPopup = function () {
        $('#popup').css('display', 'none');
    };
    MonthlyJournalComponent.prototype.addASchedule = function () {
        var _this = this;
        if (this.contentToUpload.trim() === '') {
            alert('내용을 입력해주세요.');
            return;
        }
        if (this.schedules[this.dateToModify].length > 3) {
            alert('일당 4건까지 가능합니다.');
            return;
        }
        this.monthlyJournalService.addASchedule(this.thisYear, this.thisMonth, this.dateToModify, this.contentToUpload, this.login_result.selector, this.login_result.validator)
            .then(function (result) { return _this.afterAddOrDeleteASchedule(result); });
    };
    MonthlyJournalComponent.prototype.deleteASchedule = function (id) {
        var _this = this;
        this.monthlyJournalService.deleteASchedule(this.thisYear, this.thisMonth, this.dateToModify, id, this.login_result.selector, this.login_result.validator)
            .then(function (result) { return _this.afterAddOrDeleteASchedule(result); });
    };
    MonthlyJournalComponent.prototype.afterAddOrDeleteASchedule = function (result) {
        if (result['success'] !== true) {
            alert('오류가 발생했습니다.  다시 시도해 주세요.');
            return;
        }
        this.schedules[this.dateToModify] = result['schedules'];
        this.contentToUpload = '';
    };
    return MonthlyJournalComponent;
}(component_with_account_1.ComponentWithAccount));
MonthlyJournalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-monthly-journal',
        templateUrl: '1_monthly_journal.comp.html',
        styleUrls: ['../../Styles/1_3_1_monthly_journal.css'],
    })
], MonthlyJournalComponent);
exports.MonthlyJournalComponent = MonthlyJournalComponent;
