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
    FieldsComponent.prototype.setPages = function (pageSize, total) {
        var pages = [];
        for (var i = 1; i <= Math.floor(total / pageSize) + 1; i++) {
            pages.push(i);
        }
        return pages;
    };
    FieldsComponent.prototype.goToWritePage = function (submenu) {
        this.router.navigate(['fields/write/' + submenu]);
    };
    FieldsComponent.prototype.moveToPage = function (page) {
        this.router.navigate(["fields/" + this.submenu + "/" + this.search + "/" + page]);
    };
    FieldsComponent.prototype.searchWord = function (search) {
        this.router.navigate(["fields/" + this.submenu + "/" + search + "/" + this.page]);
    };
    return FieldsComponent;
}(component_with_account_1.ComponentWithAccount));
exports.FieldsComponent = FieldsComponent;
