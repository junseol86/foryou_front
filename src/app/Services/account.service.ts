/**
 * Created by Hyeonmin on 2017-03-21.
 */
import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {LoginResult} from '../Models/Account';
import {ValueService} from './values.service';

@Injectable()
export class AccountService {

  headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  options = new RequestOptions({ headers: this.headers });

  constructor(
    private http: Http,
    private values: ValueService
  ) { }

  login(user_id: string, password: string): Promise<LoginResult> {
    const url =  this.values.backendAddress + '/login';
    return this.http.post(url, `user_id=${user_id}&password=${password}`, this.options)
      .toPromise()
      .then(response => response.json().data as LoginResult)
      .catch(this.handleError);
  }

  autoLogin(selector: string, validator: string): Promise<LoginResult> {
    const url =  this.values.backendAddress + '/autologin';
    return this.http.put(url, `selector=${selector}&validator=${validator}`, this.options)
      .toPromise()
      .then(response => response.json().data as LoginResult)
      .catch(this.handleError);
  }

  authenticate(selector: string, validator: string): Promise<Object> {
    const url =  this.values.backendAddress + '/authenticate';
    return this.http.put(url, `selector=${selector}&validator=${validator}`, this.options)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  changePassword(password: string, new_password: string, selector: string, validator: string): Promise<Object> {
    const url =  this.values.backendAddress + '/change_password';
    return this.http.patch(url,
      `password=${password}&new_password=${new_password}&selector=${selector}&validator=${validator}`, this.options)
      .toPromise()
      .then(response => response.json().data as Object)
      .catch(this.handleError);
  }

  addAdmin(user_id: string, user_pw: string,
          user_name: string, user_position: string, selector: string, validator: string): Promise<Object> {
    const url =  this.values.backendAddress + '/add_admin';
    return this.http.post(url,
      `user_id=${user_id}&user_pw=${user_pw}
      &user_name=${user_name}&user_position=${user_position}&selector=${selector}&validator=${validator}`, this.options)
      .toPromise()
      .then(response => response.json().data as Object)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
