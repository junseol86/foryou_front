/**
 * Created by Hyeonmin on 2017-04-03.
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
Object.defineProperty(exports, "__esModule", { value: true });
var component_with_account_1 = require("../component_with_account");
var FieldsDetailComponent = (function (_super) {
    __extends(FieldsDetailComponent, _super);
    function FieldsDetailComponent(activatedRoute, commonService) {
        var _this = _super.call(this) || this;
        _this.activatedRoute = activatedRoute;
        _this.commonService = commonService;
        return _this;
    }
    FieldsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = Number(params['id']);
            _this.getDetail();
        });
    };
    FieldsDetailComponent.prototype.getDetail = function () {
        this.commonService.getDetail('field', this.id);
    };
    FieldsDetailComponent.prototype.afterGettingDetail = function (detail) {
        this.detail = Object;
    };
    return FieldsDetailComponent;
}(component_with_account_1.ComponentWithAccount));
exports.FieldsDetailComponent = FieldsDetailComponent;
