/**
 * Created by Hyeonmin on 2017-03-15.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var router_1 = require("@angular/router");
var mock_service_1 = require("../../Services/mock.service");
var component_with_account_1 = require("../component_with_account");
var _2_1_TaxRepresentativeComponent = (function (_super) {
    __extends(_2_1_TaxRepresentativeComponent, _super);
    function _2_1_TaxRepresentativeComponent(router, mockService) {
        _super.call(this);
        this.router = router;
        this.mockService = mockService;
        this.menuIdx = 1;
        this.subMenuIdx = 0;
        this.articlesToShow = [[], [], [], []];
        this.columns = [0, 1, 2, 3];
        this.articles = mockService.fields_articles;
        this.articles.forEach(function (article, idx) {
            article['tagsArray'] = article['tags'] != '' ? article['tags'].split(' ') : [];
        });
    }
    _2_1_TaxRepresentativeComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.articles.length; i++) {
            this.articlesToShow[i % 4].push(this.articles[i]);
        }
    };
    _2_1_TaxRepresentativeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tax_representative',
            templateUrl: 'fields.comp.html',
            styleUrls: ['../../Styles/1_2_fields.css'],
        }),
        __metadata('design:paramtypes', [router_1.Router, mock_service_1.MockService])
    ], _2_1_TaxRepresentativeComponent);
    return _2_1_TaxRepresentativeComponent;
}(component_with_account_1.ComponentWithAccount));
exports._2_1_TaxRepresentativeComponent = _2_1_TaxRepresentativeComponent;
//# sourceMappingURL=1_tax_representative.comp.js.map
