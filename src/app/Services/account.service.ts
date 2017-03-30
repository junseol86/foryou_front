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

  login(user_id: String, password: String): Promise<LoginResult> {
    const url =  this.values.backendAddress + '/login';
    return this.http.post(url, `user_id=${user_id}&password=${password}`, this.options)
      .toPromise()
      .then(response => response.json().data as LoginResult)
      .catch(this.handleError);
  }

  autoLogin(selector: String, validator: String): Promise<LoginResult> {
    const url =  this.values.backendAddress + '/autologin';
    return this.http.put(url, `selector=${selector}&validator=${validator}`, this.options)
      .toPromise()
      .then(response => response.json().data as LoginResult)
      .catch(this.handleError);
  }

  authenticate(selector: String, validator: String): Promise<Object> {
    const url =  this.values.backendAddress + '/authenticate';
    return this.http.put(url, `selector=${selector}&validator=${validator}`, this.options)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
