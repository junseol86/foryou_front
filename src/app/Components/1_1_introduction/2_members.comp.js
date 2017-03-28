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
var router_1 = require("@angular/router");
var MembersComponent = (function () {
    function  MembersComponent (router) {
        this.router = router;
        this.menuIdx = 0;
        this.subMenuIdx = 1;
        this.popupOn = false;
        this.personId = '';
        this.branches = [
            {
                name: '본점',
                personnel: [
                    {
                        id: 'yi-kwang-woo',
                        pic: '/app/Images/other/member_yi-kwang-woo.jpg',
                        position: '회장',
                        name: '이광우'
                    },
                ]
            },
            {
                name: '분당지점',
                personnel: [
                    {
                        id: 'cho-ki-yong',
                        pic: '/app/Images/other/member_cho-ki-yong.jpg',
                        position: '대표세무사',
                        name: '조기용'
                    },
                    {
                        id: 'jung-jin-yong',
                        pic: '/app/Images/other/member_jung-jin-yong.jpg',
                        position: '소속세무사',
                        name: '정진용'
                    }
                ]
            },
            {
                name: '화성지점',
                personnel: [
                    {
                        id: 'yi-cheon-gil',
                        pic: '/app/Images/other/member_yi-cheon-gil.jpg',
                        position: '대표세무사',
                        name: '이천길'
                    }
                ]
            },
            {
                name: '경주지점',
                personnel: [
                    {
                        id: 'yi-tae-ya',
                        pic: '/app/Images/other/member_yi-tae-ya.jpg',
                        position: '대표세무사',
                        name: '이태야'
                    },
                    {
                        id: 'kim-hyeon-seok',
                        pic: '/app/Images/other/member_kim-hyeon-seok.jpg',
                        position: '소속세무사',
                        name: '김현석'
                    }
                ]
            },
            {
                name: '포항지점',
                personnel: [
                    {
                        id: 'song-cheol-han',
                        pic: '/app/Images/other/member_song-cheol-han.jpg',
                        position: '대표세무사',
                        name: '송철한'
                    },
                    {
                        id: 'yoon-jin-seok',
                        pic: '/app/Images/other/member_yoon-jin-seok.jpg',
                        position: '대표사무사',
                        name: '윤진석'
                    }
                ]
            }
        ];
    }
     MembersComponent .prototype.ngOnInit = function () {
    };
     MembersComponent .prototype.navigateTo = function (address) {
        this.router.navigate([address]);
    };
     MembersComponent .prototype.showMemberPopup = function (id) {
        this.popupOn = true;
        this.personId = id;
    };
     MembersComponent .prototype.hidePopup = function () {
        this.popupOn = false;
    };
     MembersComponent  = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'members',
            templateUrl: '2_members.comp.html',
            styleUrls: ['../../Styles/1_1_2_members.css'],
        }),
        __metadata('design:paramtypes', [router_1.Router])
    ],  MembersComponent );
    return  MembersComponent ;
}());
exports. MembersComponent  =  MembersComponent ;
//# sourceMappingURL=2_members.comp.js.map
