/**
 * Created by Hyeonmin on 2017-03-28.
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
var CREATE = 0;
var MODIFY = 1;
var FaqComponent = (function (_super) {
    __extends(FaqComponent, _super);
    function FaqComponent(activatedRoute, faqService, router) {
        var _this = _super.call(this) || this;
        _this.activatedRoute = activatedRoute;
        _this.faqService = faqService;
        _this.router = router;
        _this.menuIdx = 3;
        _this.subMenuIdx = 1;
        _this.faqs = [];
        _this.pages = [];
        _this.articles_on = [];
        _this.writing = false;
        _this.createOrModify = CREATE;
        return _this;
    }
    FaqComponent.prototype.setTopicToSend = function (topic) {
        this.topicToSend = topic;
    };
    FaqComponent.prototype.setQuestionToSend = function (question) {
        this.questionToSend = question;
    };
    FaqComponent.prototype.setAnswerToSend = function (answer) {
        this.answerToSend = answer;
    };
    FaqComponent.prototype.clearAllToSend = function () {
        this.topicToSend = '';
        this.questionToSend = '';
        this.answerToSend = '';
    };
    FaqComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.writing = false;
        this.faqs = [];
        this.activatedRoute.params.subscribe(function (params) {
            _this.page = Number(params['page']);
            _this.getFaqs(_this.page);
        });
    };
    FaqComponent.prototype.getFaqs = function (page) {
        var _this = this;
        this.faqService.getFaqs(page).then(function (faqsAndTotal) { return _this.afterGettingFaqs(faqsAndTotal); });
    };
    FaqComponent.prototype.afterGettingFaqs = function (faqsAndTotal) {
        this.faqs = faqsAndTotal.list;
        this.pages = this.setPages(faqsAndTotal.pageSize, faqsAndTotal.total);
        $.getScript('/app/Scripts/1_4_2_faq.js');
    };
    FaqComponent.prototype.articleOnOff = function (id) {
        var idx = this.articles_on.indexOf(id);
        if (idx < 0) {
            this.articles_on.push(id);
        }
        else {
            this.articles_on.splice(idx, 1);
        }
    };
    FaqComponent.prototype.setPages = function (pageSize, total) {
        var pages = [];
        for (var i = 1; i <= Math.floor(total / pageSize) + 1; i++) {
            pages.push(i);
        }
        return pages;
    };
    FaqComponent.prototype.newFaq = function () {
        this.createOrModify = CREATE;
        this.setWriting(true);
        this.clearAllToSend();
    };
    FaqComponent.prototype.modifyFaq = function (faq, event) {
        this.articleToModify = faq['faq.id'];
        this.topicToSend = faq['faq.topic'];
        this.questionToSend = faq['faq.question'];
        this.answerToSend = faq['faq.answer'];
        event.stopPropagation();
        this.createOrModify = MODIFY;
        this.setWriting(true);
        window.scroll(0, -10000);
    };
    FaqComponent.prototype.setWriting = function (set) {
        this.writing = set;
    };
    FaqComponent.prototype.submitFaq = function () {
        var _this = this;
        if (this.createOrModify === CREATE) {
            this.faqService.addFaq(this.topicToSend, this.questionToSend, this.answerToSend, this.login_result.selector, this.login_result.validator)
                .then(function (result) { return _this.addFaqResult(result); });
        }
        else {
            this.faqService.modifyFaq(this.articleToModify, this.topicToSend, this.questionToSend, this.answerToSend, this.login_result.selector, this.login_result.validator)
                .then(function (result) { return _this.modifyFaqResult(result); });
        }
    };
    FaqComponent.prototype.addFaqResult = function (result) {
        if (result['success'] === true) {
            this.moveToPage(1);
            this.ngOnInit();
        }
        else {
            alert('오류가 발생했습니다.  다시 시도해주세요.');
        }
    };
    FaqComponent.prototype.modifyFaqResult = function (result) {
        if (result['success'] === true) {
            alert('수정되었습니다.');
            this.ngOnInit();
        }
        else {
            alert('오류가 발생했습니다.  다시 시도해주세요.');
        }
    };
    FaqComponent.prototype.deleteFaq = function (id, event) {
        var _this = this;
        event.stopPropagation();
        if (confirm('이 항목을 삭제하시겠습니까?')) {
            this.faqService.deleteFaq(id, this.login_result.selector, this.login_result.validator)
                .then(function (result) { return _this.deleteFaqResult(result); });
        }
    };
    FaqComponent.prototype.deleteFaqResult = function (result) {
        if (result['success'] === true) {
            this.ngOnInit();
        }
        else {
            alert('오류가 발생했습니다.  다시 시도해주세요.');
        }
    };
    FaqComponent.prototype.moveToPage = function (page) {
        this.router.navigate(['online_consulting/faq/' + (page - 1)]);
    };
    return FaqComponent;
}(component_with_account_1.ComponentWithAccount));
FaqComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-faq',
        templateUrl: '2_faq.comp.html',
        styleUrls: ['../../Styles/1_4_2_faq.css'],
    })
], FaqComponent);
exports.FaqComponent = FaqComponent;
