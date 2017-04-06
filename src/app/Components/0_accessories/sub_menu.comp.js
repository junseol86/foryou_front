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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SubMenuComponent = (function () {
    function SubMenuComponent(menuService, router) {
        this.menuService = menuService;
        this.router = router;
        this.menus = menuService.menus;
    }
    SubMenuComponent.prototype.navigateTo = function (address) {
        this.router.navigate([address]);
    };
    return SubMenuComponent;
}());
__decorate([
    core_1.Input()
], SubMenuComponent.prototype, "menuIdx", void 0);
__decorate([
    core_1.Input()
], SubMenuComponent.prototype, "subMenuIdx", void 0);
SubMenuComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-sub-menu',
        templateUrl: 'sub_menu.comp.html',
        styleUrls: ['../../Styles/0_accessories.css']
    })
], SubMenuComponent);
exports.SubMenuComponent = SubMenuComponent;
