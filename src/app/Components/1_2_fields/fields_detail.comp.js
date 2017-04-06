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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var component_with_account_1 = require("../component_with_account");
var FieldsDetailComponent = (function (_super) {
    __extends(FieldsDetailComponent, _super);
    function FieldsDetailComponent(activatedRoute, fieldsService, commonService, router) {
        var _this = _super.call(this) || this;
        _this.activatedRoute = activatedRoute;
        _this.fieldsService = fieldsService;
        _this.commonService = commonService;
        _this.router = router;
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
        var _this = this;
        this.commonService.getDetail('fields', this.id)
            .then(function (result) { return _this.afterGettingDetail(result); });
    };
    FieldsDetailComponent.prototype.afterGettingDetail = function (detail) {
        this.detail = detail;
        this.detail['tagsArray'] = this.detail['fields.tags'].split(' ');
        this.content = detail['fields.content'];
        if ('fields.id' in this.detail) {
            this.menuIdx = 1;
            switch (this.detail['fields.submenu']) {
                case 'tax_representative':
                    this.subMenuIdx = 0;
                    break;
                case 'property_tax':
                    this.subMenuIdx = 1;
                    break;
                case 'tax_protest':
                    this.subMenuIdx = 2;
                    break;
                case 'management_support':
                    this.subMenuIdx = 3;
                    break;
                case 'management_consulting':
                    this.subMenuIdx = 4;
                    break;
            }
            if ('tax_news.id' in this.detail) {
                this.menuIdx = 2;
                this.subMenuIdx = 1;
            }
        }
        $.getScript('/app/Scripts/image_process.js');
    };
    FieldsDetailComponent.prototype.searchWord = function (search) {
        this.router.navigate(["fields/" + this.detail['fields.submenu'] + "/" + search + "/0"]);
    };
    FieldsDetailComponent.prototype.goToModifyPage = function () {
        this.router.navigate(["fields/write/" + this.detail['fields.submenu'] + "/" + this.detail['fields.id'] + "/"]);
    };
    FieldsDetailComponent.prototype.deleteFields = function () {
        var _this = this;
        if (confirm('이 글을 삭제하시겠습니까?')) {
            this.fieldsService.deleteFields(this.id, this.login_result.selector, this.login_result.validator)
                .then(function (result) { return _this.afterDeletingFields(result); });
        }
    };
    FieldsDetailComponent.prototype.afterDeletingFields = function (result) {
        if (result['success'] === true) {
            alert('글이 삭제되었습니다.');
            this.router.navigate(['/fields/' + this.detail['fields.submenu'] + '/@/0']);
        }
        else {
            alert('오류가 발생했습니다.  다시 시도해주세요.');
        }
    };
    return FieldsDetailComponent;
}(component_with_account_1.ComponentWithAccount));
FieldsDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-fields-detail',
        templateUrl: 'fields_detail.comp.html',
        styleUrls: ['../../Styles/1_2_fields.css'],
    })
], FieldsDetailComponent);
exports.FieldsDetailComponent = FieldsDetailComponent;
