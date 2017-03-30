import {LoginResult} from '../Models/Account';
/**
 * Created by Hyeonmin on 2017-03-23.
 */
export class ComponentWithAccount {
  // 로그인 상태에 영향을 받는 컴포넌트들

  NOT_LOGGED_IN = 0;
  LOGGED_IN = 2;

  login_status: number = this.NOT_LOGGED_IN;
  login_result: LoginResult;

  constructor() {

  }

  // 로그인 되어있는지 여부
  getLoginStatus(loginStatus: number) {
    this.login_status = loginStatus;
  }

  // 로그인 후 받은 정보
  getLoginResult(loginResult: LoginResult) {
    this.login_result = loginResult;
  }

}
