/**
 * Created by Hyeonmin on 2017-03-30.
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
var FieldsComponent = (function (_super) {
    __extends(FieldsComponent, _super);
    function FieldsComponent(activatedRoute, fieldsService, router, submenu) {
        var _this = _super.call(this) || this;
        _this.activatedRoute = activatedRoute;
        _this.fieldsService = fieldsService;
        _this.router = router;
        _this.submenu = submenu;
        _this.pages = [];
        _this.field_descs = [
            ['개인 및 법인의 장부작성 및 재무재표 작성', '법인세, 소득세, 부가가치세 신고'],
            ['양도소득세 자문 및 신고', '증여세, 상속세 자문 및 신고'],
            ['억울한 세금에 대한 불복절차 진행', '과세전적부심사, 이의신청, 심사청구, 심판청구'],
            ['법인설립 및 법인전환', '내부관리구조 수립 및 재무시스템 확립', '기업부설연구소 및 벤처기업인증'],
            ['각종 볍에서 정하는 기업진단 업무']
        ];
        return _this;
    }
    FieldsComponent.prototype.getFields = function () {
        var _this = this;
        this.fieldsService.getFields(this.submenu, this.page, this.search)
            .then(function (result) { return _this.afterGettingFields(result); });
    };
    FieldsComponent.prototype.afterGettingFields = function (fieldsAndTotal) {
        this.articles = fieldsAndTotal.list;
        this.articles.forEach(function (article, idx) {
            article['tagsArray'] = article['fields.tags'] !== '' ? article['fields.tags'].split(' ') : [];
        });
        this.pages = this.setPages(fieldsAndTotal.pageSize, fieldsAndTotal.total);
        $.getScript('/app/Scripts/1_2_fields.js');
    };
    FieldsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.page = Number(params['page']);
            _this.search = params['search'];
            _this.getFields();
        });
    };
    FieldsComponent.prototype.goToWritePage = function (submenu) {
        this.router.navigate(['fields/write/' + submenu + '/write']);
    };
    FieldsComponent.prototype.setPages = function (pageSize, total) {
        var pages = [];
        for (var i = 1; i <= Math.floor(total / pageSize) + 1; i++) {
            pages.push(i);
        }
        return pages;
    };
    FieldsComponent.prototype.moveToPage = function (page) {
        this.router.navigate(["fields/" + this.submenu + "/" + this.search + "/" + page]);
    };
    FieldsComponent.prototype.searchWord = function (search, event) {
        event.stopPropagation();
        this.router.navigate(["fields/" + this.submenu + "/" + search + "/0"]);
    };
    FieldsComponent.prototype.searchWordEnter = function (search, event) {
        if (event['key'] === 'Enter') {
            this.searchWord(search, event);
        }
    };
    FieldsComponent.prototype.toDetail = function (id) {
        this.router.navigate(['fields/detail/' + id]);
    };
    return FieldsComponent;
}(component_with_account_1.ComponentWithAccount));
exports.FieldsComponent = FieldsComponent;
