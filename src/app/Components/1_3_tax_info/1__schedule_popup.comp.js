/**
 * Created by Hyeonmin on 2017-03-27.
 */
"use strict";
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
var _1_3__SchedulePopupComponent = (function () {
    function _1_3__SchedulePopupComponent() {
        this.windowHeight = 0;
        this.popupLeft = 0;
    }
    _1_3__SchedulePopupComponent.prototype.ngOnInit = function () {
        this.windowHeight = window.innerHeight;
        this.popupLeft = (window.innerWidth - 1070) / 2;
    };
    _1_3__SchedulePopupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'schedule_popup',
            template: "\n    <div id=\"popup\" ngClass=\"{{popupOn ? '-on' : ''}}\"\n         [ngStyle]=\"{'height':windowHeight + 'px', 'left': popupLeft + 'px'}\"\n    >\n      <div id=\"modify_schedule\"\n           [ngStyle]=\"{'margin-top':(windowHeight - 307)/2 + 'px'}\"\n      >\n        <div id=\"title\">\n          {{thisYear}}\uB144 {{thisMonth}}\uC6D4 {{dateToModify}}\uC77C\n          <div class=\"close\" (click)=\"closeModifyPopup()\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></div>\n        </div>\n        <div id=\"schedules\" *ngIf=\"dateToModify != undefined\">\n          <div class=\"schedule\" *ngFor=\"let schedule of schedules[dateToModify]\">\n            {{schedule['monthly_journal.content']}}\n            <div class=\"delete\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></div>\n          </div>\n        </div>\n        <div id=\"insert\">\n          <input #content type=\"text\" maxlength=\"20\" value=\"{{contentToUpload}}\" (change)=\"setContentUpload(content.value)\">\n          <div id=\"enter\" (click)=\"addSchedule()\">\n            <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n            \uC62C\uB9AC\uAE30\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
            styleUrls: ['../../Styles/1_3_1_monthly_journal.css'],
            inputs: ['popupOn']
        }), 
        __metadata('design:paramtypes', [])
    ], _1_3__SchedulePopupComponent);
    return _1_3__SchedulePopupComponent;
}());
exports._1_3__SchedulePopupComponent = _1_3__SchedulePopupComponent;
//# sourceMappingURL=1__schedule_popup.comp.js.map