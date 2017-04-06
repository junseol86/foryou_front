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

  user_id: string;
  password: string;
  accountService: AccountService;
  cookieService: CookieService;
  loginResult: LoginResult;

  login_status: number = this.NOT_LOGGED_IN;

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
      case 0: this.updateLoginStatus(this.LOGGING_IN); break;
      case 1: this.updateLoginStatus(this.LOGGED_IN); break;
      case 2: this.updateLoginStatus(this.LOGGING_IN); alert('오류가 발생했습니다.  다시 시도해 주십시오.'); break;
    }
  }

  logout(): void {
    this.cookieService.remove('foryou_account');
    this.updateLoginStatus(this.NOT_LOGGED_IN);
  }

}
