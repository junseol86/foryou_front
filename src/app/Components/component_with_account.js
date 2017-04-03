"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Hyeonmin on 2017-03-23.
 */
var ComponentWithAccount = (function () {
    function ComponentWithAccount() {
        // 로그인 상태에 영향을 받는 컴포넌트들
        this.NOT_LOGGED_IN = 0;
        this.LOGGED_IN = 2;
        this.login_status = this.NOT_LOGGED_IN;
    }
    // 로그인 되어있는지 여부
    ComponentWithAccount.prototype.getLoginStatus = function (loginStatus) {
        this.login_status = loginStatus;
    };
    // 로그인 후 받은 정보
    ComponentWithAccount.prototype.getLoginResult = function (loginResult) {
        this.login_result = loginResult;
    };
    return ComponentWithAccount;
}());
exports.ComponentWithAccount = ComponentWithAccount;
