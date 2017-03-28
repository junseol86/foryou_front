/**
 * Created by Hyeonmin on 2017-03-13.
 */
"use strict";
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
var menu_service_1 = require("../../Services/menu.service");
var router_1 = require("@angular/router");
var SubMenuComponent = (function () {
    function SubMenuComponent(menuService, router) {
        this.menuService = menuService;
        this.router = router;
        this.menus = menuService.menus;
    }
    SubMenuComponent.prototype.navigateTo = function (address) {
        this.router.navigate([address]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SubMenuComponent.prototype, "menuIdx", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SubMenuComponent.prototype, "subMenuIdx", void 0);
    SubMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sub_menu',
            templateUrl: 'sub_menu.comp.html',
            styleUrls: ['../../Styles/0_accessories.css']
        }), 
        __metadata('design:paramtypes', [menu_service_1.MenuService, router_1.Router])
    ], SubMenuComponent);
    return SubMenuComponent;
}());
exports.SubMenuComponent = SubMenuComponent;
//# sourceMappingURL=sub_menu.comp.js.map