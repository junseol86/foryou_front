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
var _1_2__MembersPopupComponent = (function () {
    function _1_2__MembersPopupComponent() {
        this.windowHeight = 0;
        this.popupLeft = 0;
        this.popupOnOut = new core_1.EventEmitter();
    }
    _1_2__MembersPopupComponent.prototype.hidePopup = function () {
        this.popupOn = false;
        this.popupOnOut.emit(false);
    };
    _1_2__MembersPopupComponent.prototype.ngOnInit = function () {
        this.windowHeight = window.innerHeight;
        this.popupLeft = (window.innerWidth - 1070) / 2;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], _1_2__MembersPopupComponent.prototype, "popupOnOut", void 0);
    _1_2__MembersPopupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'members_popup',
            templateUrl: '2__members_popup.comp.html',
            styleUrls: ['../../Styles/1_1_2_members.css'],
            inputs: ['popupOn', 'personId']
        }), 
        __metadata('design:paramtypes', [])
    ], _1_2__MembersPopupComponent);
    return _1_2__MembersPopupComponent;
}());
exports._1_2__MembersPopupComponent = _1_2__MembersPopupComponent;
//# sourceMappingURL=2__members_popup.comp.js.map