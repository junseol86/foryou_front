"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Hyeonmin on 2017-03-17.
 */
var core_1 = require("@angular/core");
var FooterComponent = (function () {
    function FooterComponent(accountService, cookieService) {
        this.NOT_LOGGED_IN = 0;
        this.LOGGING_IN = 1;
        this.LOGGED_IN = 2;
        this.login_status = this.NOT_LOGGED_IN;
        this.login_status_output = new core_1.EventEmitter();
        this.login_result_output = new core_1.EventEmitter();
        this.accountService = accountService;
        this.cookieService = cookieService;
    }
    FooterComponent.prototype.updateLoginStatus = function (loginStatus) {
        this.login_status = loginStatus;
        this.login_status_output.emit(loginStatus);
    };
    FooterComponent.prototype.updateLoginResult = function (loginResult) {
        this.loginResult = loginResult;
        this.login_result_output.emit(loginResult);
    };
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginResult = this.cookieService.getObject('foryou_account');
        if (this.loginResult && this.loginResult.loginResult === 1) {
            this.accountService.autoLogin(this.loginResult.selector, this.loginResult.validator)
                .then(function (loginResult) { return _this.afterLogin(loginResult); });
        }
        else {
            this.updateLoginStatus(this.NOT_LOGGED_IN);
        }
    };
    FooterComponent.prototype.setPassword = function (value) { this.password = value; };
    FooterComponent.prototype.setUserId = function (value) { this.user_id = value; };
    FooterComponent.prototype.show_login_interface = function () {
        this.updateLoginStatus(this.LOGGING_IN);
    };
    FooterComponent.prototype.cancel_logging_in = function () {
        this.updateLoginStatus(this.NOT_LOGGED_IN);
    };
    FooterComponent.prototype.login = function () {
        var _this = this;
        this.accountService.login(this.user_id, this.password)
            .then(function (result) { return _this.afterLogin(result); });
    };
    FooterComponent.prototype.afterLogin = function (loginResult) {
        this.cookieService.putObject('foryou_account', loginResult);
        console.log(loginResult);
        if (loginResult === undefined) {
            this.updateLoginStatus(this.NOT_LOGGED_IN);
            return;
        }
        this.loginResult = loginResult;
        this.updateLoginResult(loginResult);
        switch (this.loginResult.loginResult) {
            case 0:
                this.updateLoginStatus(this.LOGGING_IN);
                break;
            case 1:
                this.updateLoginStatus(this.LOGGED_IN);
                break;
            case 2:
                this.updateLoginStatus(this.LOGGING_IN);
                alert('오류가 발생했습니다.  다시 시도해 주십시오.');
                break;
        }
    };
    FooterComponent.prototype.logout = function () {
        this.cookieService.remove('foryou_account');
        this.updateLoginStatus(this.NOT_LOGGED_IN);
    };
    return FooterComponent;
}());
__decorate([
    core_1.Output()
], FooterComponent.prototype, "login_status_output", void 0);
__decorate([
    core_1.Output()
], FooterComponent.prototype, "login_result_output", void 0);
FooterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-footer',
        templateUrl: 'footer.comp.html',
        styleUrls: ['../../Styles/0_accessories.css'],
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;
