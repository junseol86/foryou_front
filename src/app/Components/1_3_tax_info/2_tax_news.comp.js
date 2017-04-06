/**
 * Created by Hyeonmin on 2017-04-05.
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
var TaxNewsComponent = (function (_super) {
    __extends(TaxNewsComponent, _super);
    function TaxNewsComponent(activatedRoute, taxNewsService, router) {
        var _this = _super.call(this) || this;
        _this.activatedRoute = activatedRoute;
        _this.taxNewsService = taxNewsService;
        _this.router = router;
        _this.menuIdx = 2;
        _this.subMenuIdx = 1;
        _this.pages = [];
        return _this;
    }
    TaxNewsComponent.prototype.getTaxNews = function () {
        var _this = this;
        this.taxNewsService.getTaxNews(this.page, this.search)
            .then(function (result) { return _this.afterGettingTaxNews(result); });
    };
    TaxNewsComponent.prototype.afterGettingTaxNews = function (taxNewsAndTotal) {
        this.articles = taxNewsAndTotal.list;
        this.articles.forEach(function (article, idx) {
            article['tagsArray'] = article['tax_news.tags'] !== '' ? article['tax_news.tags'].split(' ') : [];
        });
        this.pages = this.setPages(taxNewsAndTotal.pageSize, taxNewsAndTotal.total);
    };
    TaxNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.page = Number(params['page']);
            _this.search = params['search'];
            _this.getTaxNews();
        });
    };
    TaxNewsComponent.prototype.goToWritePage = function () {
        this.router.navigate(['tax_news/write/write']);
    };
    TaxNewsComponent.prototype.setPages = function (pageSize, total) {
        var pages = [];
        for (var i = 1; i <= Math.floor(total / pageSize) + 1; i++) {
            pages.push(i);
        }
        return pages;
    };
    TaxNewsComponent.prototype.moveToPage = function (page) {
        this.router.navigate(["tax_news/" + this.search + "/" + page]);
    };
    TaxNewsComponent.prototype.toDetail = function (id) {
        this.router.navigate(['tax_news/detail/' + id]);
    };
    return TaxNewsComponent;
}(component_with_account_1.ComponentWithAccount));
TaxNewsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-news',
        templateUrl: '2_tax_news.comp.html',
        styleUrls: ['../../Styles/1_3_2_tax_news.css'],
    })
], TaxNewsComponent);
exports.TaxNewsComponent = TaxNewsComponent;
