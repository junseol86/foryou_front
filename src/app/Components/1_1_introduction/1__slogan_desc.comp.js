/**
 * Created by Hyeonmin on 2017-03-27.
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
var _1_1__SloganDescComponent = (function () {
    function _1_1__SloganDescComponent() {
        this.selectedInitial = 0;
        this.slogan_descs = [
            {
                english: 'Facilitate',
                korean: '가능하게 하다',
                desc: '안 되면 될 때까지, 무한한 가능성을 보여드립니다.'
            },
            {
                english: 'Offer',
                korean: '제의하다, 권하다',
                desc: '고객에게 맞추어 좋은 것을 제안하며 최선의 것을 권할 것입니다.',
            },
            {
                english: 'Recognised',
                korean: '인정받는',
                desc: '머지 않아 모두에게 인정받게 될 것입니다.',
            },
            {
                english: 'You',
                korean: '당신',
                desc: '당신이',
            },
            {
                english: 'Obtain',
                korean: '얻다',
                desc: '추구하는 것을 얻을 때까지',
            },
            {
                english: 'Undertake',
                korean: '약속하다',
                desc: '늘 당신과 함께할 것을 약속합니다.',
            }
        ];
    }
    _1_1__SloganDescComponent.prototype.ngOnInit = function () {
    };
    _1_1__SloganDescComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'slogan_desc',
            template: "\n    <div #slogan_desc id=\"slogan_desc\" class=\"_c_align\">\n      <p>\n        <span id=\"english\">{{slogan_descs[selectedInitial]['english']}}</span> : <span id=\"korean\">{{slogan_descs[selectedInitial]['korean']}}</span>\n      </p>\n      <div id=\"desc\">{{slogan_descs[selectedInitial]['desc']}}</div>\n    </div>\n  ",
            styleUrls: ['../../Styles/1_1_1_greeting.css'],
            inputs: ['selectedInitial']
        }), 
        __metadata('design:paramtypes', [])
    ], _1_1__SloganDescComponent);
    return _1_1__SloganDescComponent;
}());
exports._1_1__SloganDescComponent = _1_1__SloganDescComponent;
//# sourceMappingURL=1__slogan_desc.comp.js.map