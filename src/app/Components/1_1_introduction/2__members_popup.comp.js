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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MembersPopupComponent = (function () {
    function MembersPopupComponent() {
        this.windowHeight = 0;
        this.popupLeft = 0;
        // popupOn: boolean;
        // personId: string;
        this.popupOnOut = new core_1.EventEmitter();
    }
    MembersPopupComponent.prototype.hidePopup = function () {
        this.popupOnInput = false;
        this.popupOnOut.emit(false);
    };
    MembersPopupComponent.prototype.ngOnInit = function () {
        this.windowHeight = window.innerHeight;
        this.popupLeft = (window.innerWidth - 1070) / 2;
    };
    return MembersPopupComponent;
}());
__decorate([
    core_1.Input()
], MembersPopupComponent.prototype, "popupOnInput", void 0);
__decorate([
    core_1.Input()
], MembersPopupComponent.prototype, "personIdInput", void 0);
__decorate([
    core_1.Output()
], MembersPopupComponent.prototype, "popupOnOut", void 0);
MembersPopupComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-members-popup',
        templateUrl: '2__members_popup.comp.html',
        styleUrls: ['../../Styles/1_1_2_members.css'],
    })
], MembersPopupComponent);
exports.MembersPopupComponent = MembersPopupComponent;
