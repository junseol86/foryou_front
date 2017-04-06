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
var TaxNewsDetailComponent = (function (_super) {
    __extends(TaxNewsDetailComponent, _super);
    function TaxNewsDetailComponent(activatedRoute, taxNewsService, commonService, router) {
        var _this = _super.call(this) || this;
        _this.activatedRoute = activatedRoute;
        _this.taxNewsService = taxNewsService;
        _this.commonService = commonService;
        _this.router = router;
        return _this;
    }
    TaxNewsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = Number(params['id']);
            _this.getDetail();
        });
    };
    TaxNewsDetailComponent.prototype.getDetail = function () {
        var _this = this;
        this.commonService.getDetail('tax_news', this.id)
            .then(function (result) { return _this.afterGettingDetail(result); });
    };
    TaxNewsDetailComponent.prototype.afterGettingDetail = function (detail) {
        this.detail = detail;
        this.detail['tagsArray'] = this.detail['tax_news.tags'].split(' ');
        this.content = detail['tax_news.content'];
        $.getScript('/app/Scripts/image_process.js');
    };
    TaxNewsDetailComponent.prototype.searchWord = function (search) {
        this.router.navigate(["tax_news/" + this.detail['tax_news.submenu'] + "/" + search + "/0"]);
    };
    TaxNewsDetailComponent.prototype.goToModifyPage = function () {
        this.router.navigate(["tax_news/write/" + this.detail['tax_news.submenu'] + "/" + this.detail['tax_news.id'] + "/"]);
    };
    TaxNewsDetailComponent.prototype.deleteTaxNews = function () {
        var _this = this;
        if (confirm('이 글을 삭제하시겠습니까?')) {
            this.taxNewsService.deleteTaxNews(this.id, this.login_result.selector, this.login_result.validator)
                .then(function (result) { return _this.afterDeletingTaxNews(result); });
        }
    };
    TaxNewsDetailComponent.prototype.afterDeletingTaxNews = function (result) {
        if (result['success'] === true) {
            alert('글이 삭제되었습니다.');
            this.router.navigate(['/tax_news/' + this.detail['tax_news.submenu'] + '/@/0']);
        }
        else {
            alert('오류가 발생했습니다.  다시 시도해주세요.');
        }
    };
    return TaxNewsDetailComponent;
}(component_with_account_1.ComponentWithAccount));
TaxNewsDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-tax-news-detail',
        templateUrl: '2_tax_news_detail.comp.html',
        styleUrls: ['../../Styles/1_3_2_tax_news.css'],
    })
], TaxNewsDetailComponent);
exports.TaxNewsDetailComponent = TaxNewsDetailComponent;
