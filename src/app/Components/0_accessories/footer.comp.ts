/**
 * Created by Hyeonmin on 2017-03-17.
 */
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import {AccountService} from '../../Services/account.service';
import {LoginResult} from '../../Models/Account';
import {CookieService} from 'angular2-cookie/core';


@Component({
  moduleId: module.id,
  selector: 'app-footer',
  templateUrl: 'footer.comp.html',
  styleUrls: ['../../Styles/0_accessories.css'],
})

export class FooterComponent implements OnInit {

  NOT_LOGGED_IN = 0;
  LOGGING_IN = 1;
  LOGGED_IN = 2;
  CHANGING_PW = 3;
  ADDING_ADMIN = 4;

  user_id: string;
  password: string;
  accountService: AccountService;
  cookieService: CookieService;
  loginResult: LoginResult;

  login_status: number = this.NOT_LOGGED_IN;

  changePwVals = ['', '', ''];
  addUserVals = ['', '', '', '', ''];

  @Output() login_status_output = new EventEmitter<number>();
  @Output() login_result_output = new EventEmitter<LoginResult>();

  updateLoginStatus(loginStatus: number) {
    this.login_status = loginStatus;
    this.login_status_output.emit(loginStatus);
  }
  updateLoginResult(loginResult: LoginResult) {
    this.loginResult = loginResult;
    this.login_result_output.emit(loginResult);
  }

  toChangingPw(): void {
    this.login_status = this.CHANGING_PW;
  }

  toAddingAdmin(): void {
    this.login_status = this.ADDING_ADMIN;
  }

  toLoggedIn(): void {
    this.login_status = this.LOGGED_IN;
  }

  constructor(
    accountService: AccountService,
    cookieService: CookieService
  ) {
    this.accountService = accountService;
    this.cookieService = cookieService;
  }

  ngOnInit(): void {
    this.loginResult = this.cookieService.getObject('foryou_account') as LoginResult;
    if (this.loginResult && this.loginResult.loginResult === 1) {
      this.accountService.autoLogin(this.loginResult.selector, this.loginResult.validator)
        .then(loginResult => this.afterLogin(loginResult));
    } else {
      this.updateLoginStatus(this.NOT_LOGGED_IN);
    }
  }

  setPassword(value: string) {this.password = value; }
  setUserId(value: string) {this.user_id = value; }

  setChangePwVals(idx: number, val: string): void {
    this.changePwVals[idx] = val;
  }
  setAddUserVals(idx: number, val: string): void {
    this.addUserVals[idx] = val;
  }

  show_login_interface(): void {
    this.updateLoginStatus(this.LOGGING_IN);
  }

  cancel_logging_in(): void {
    this.updateLoginStatus(this.NOT_LOGGED_IN);
  }

  login(): void {
    this.accountService.login(this.user_id, this.password)
      .then(result => this.afterLogin(result));
  }
  afterLogin(loginResult: LoginResult): void {
    this.cookieService.putObject('foryou_account', loginResult);
    console.log(loginResult);
    if (loginResult === undefined) {
      this.updateLoginStatus(this.NOT_LOGGED_IN);
      return;
    }
    this.loginResult = loginResult;
    this.updateLoginResult(loginResult);
    switch (this.loginResult.loginResult) {
      case 0: this.updateLoginStatus(this.LOGGING_IN); alert('아이디와 패스워드를 다시 확인해주세요.'); break;
      case 1: this.updateLoginStatus(this.LOGGED_IN); break;
      case 2: this.updateLoginStatus(this.LOGGING_IN); alert('오류가 발생했습니다.  다시 시도해 주십시오.'); break;
    }
  }

  logout(): void {
    this.cookieService.remove('foryou_account');
    this.updateLoginStatus(this.NOT_LOGGED_IN);
  }

  changePw(): void {
    if (this.changePwVals[1] !== this.changePwVals[2]) {
      alert('새 비밀번호들을 동일하게 입력하세요.');
      return;
    }
    this.accountService.changePassword(this.changePwVals[0], this.changePwVals[1], this.loginResult.selector, this.loginResult.validator)
      .then(result => this.afterChangingPw(result));
  }
  afterChangingPw(result: Object): void {
    if (result['success'] === true) {
      alert('비밀번호가 변경되었습니다.  다시 로그인해주세요.');
      this.changePwVals[0] = '';
      this.changePwVals[1] = '';
      this.changePwVals[2] = '';
      this.logout();
    } else {
      alert('오류가 발생했습니다.  비밀번호를 정확하게 입력하였는지 확인해주세요.');
    }
  }

  addAdmin(): void {
    if (this.addUserVals[3] !== this.addUserVals[4]) {
      alert('새 비밀번호들을 동일하게 입력하세요.');
      return;
    }
    this.accountService.addAdmin(this.addUserVals[0], this.addUserVals[3], this.addUserVals[1], this.addUserVals[2],
      this.loginResult.selector, this.loginResult.validator)
      .then(result => this.afterAddingAdmin(result));
  }
  afterAddingAdmin(result: Object): void {
    if (result['success'] === true) {
      alert('관리자가 추가되었습니다.');
      this.login_status = this.LOGGED_IN;
      this.addUserVals[0] = '';
      this.addUserVals[1] = '';
      this.addUserVals[2] = '';
      this.addUserVals[3] = '';
      this.addUserVals[4] = '';
    } else {
      alert('오류가 발생했습니다.  중복된 아이디가 있을 수 있으니 다른 아이디로 다시 시도해 주세요.');
    }
  }
}
