/**
 * Created by Hyeonmin on 2017-04-03.
 */

import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {ValueService} from './values.service';

@Injectable()
export  class CommonService {

  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  options = new RequestOptions({headers: this.headers});

  constructor(private http: Http,
              private values: ValueService) {
  }

  getDetail(table: string, id: number): Promise<Object> {
    const url =  this.values.backendAddress + `/detail/${table}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Object)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
