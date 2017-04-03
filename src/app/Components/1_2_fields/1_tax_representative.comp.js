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
var fields_comp_1 = require("./fields.comp");
var core_1 = require("@angular/core");
/**
 * Created by Hyeonmin on 2017-03-15.
 */
var TaxRepresentativeComponent = (function (_super) {
    __extends(TaxRepresentativeComponent, _super);
    function TaxRepresentativeComponent(activatedRoute, fieldsService, router) {
        var _this = _super.call(this, activatedRoute, fieldsService, router, 'tax_representative') || this;
        _this.menuIdx = 1;
        _this.subMenuIdx = 0;
        return _this;
    }
    return TaxRepresentativeComponent;
}(fields_comp_1.FieldsComponent));
TaxRepresentativeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-tax-representative',
        templateUrl: 'fields.comp.html',
        styleUrls: ['../../Styles/1_2_fields.css'],
    })
], TaxRepresentativeComponent);
exports.TaxRepresentativeComponent = TaxRepresentativeComponent;
