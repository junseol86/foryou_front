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
var GreetingComponent = (function () {
    function GreetingComponent() {
        this.menuIdx = 0;
        this.subMenuIdx = 0;
        this.slogan_initials = ['F', 'O', 'R', 'Y', 'O', 'U'];
    }
    GreetingComponent.prototype.ngOnInit = function () {
        this.selectedInitial = 0;
    };
    GreetingComponent.prototype.set_slogan = function (idx) {
        this.selectedInitial = idx;
    };
    GreetingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'greeting',
            templateUrl: '1_greeting.comp.html',
            styleUrls: ['../../Styles/1_1_1_greeting.css'],
        }),
        __metadata('design:paramtypes', [])
    ], GreetingComponent);
    return GreetingComponent;
}());
exports.GreetingComponent = GreetingComponent;
//# sourceMappingURL=1_greeting.comp.js.map
