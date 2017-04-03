/**
 * Created by Hyeonmin on 2017-03-28.
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
var ConsultingApplyComponent = (function (_super) {
    __extends(ConsultingApplyComponent, _super);
    function ConsultingApplyComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.menuIdx = 3;
        _this.subMenuIdx = 0;
        return _this;
    }
    ConsultingApplyComponent.prototype.ngOnInit = function () {
    };
    return ConsultingApplyComponent;
}(component_with_account_1.ComponentWithAccount));
ConsultingApplyComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-consulting-apply',
        templateUrl: '1_consulting_apply.comp.html',
        styleUrls: ['../../Styles/1_4_1_consulting_apply.css'],
    })
], ConsultingApplyComponent);
exports.ConsultingApplyComponent = ConsultingApplyComponent;
