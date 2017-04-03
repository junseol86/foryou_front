/**
 * Created by Hyeonmin on 2017-04-03.
 */

import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {ListAndTotal} from '../Models/List';
import {ValueService} from './values.service';

@Injectable()
export  class FieldsService {

  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  options = new RequestOptions({headers: this.headers});

  constructor(
    private http: Http,
    private values: ValueService
  ) { }

  getFields(submenu: string, page: number, search: string): Promise<ListAndTotal> {
    const url = this.values.developAddress + `/fields/${submenu}/${page}/${search}`;
    return this.http.get(url)
      .toPromise()
      .then(response =>
        new ListAndTotal(response.json().data['list'] as Object[], response.json().data['total'], response.json().data['pageSize']))
      .catch(this.handleError);
  }

  writeFields(submenu: string, title: string, tags: string, content: string, selector: string, validator: string): Promise<Object> {
    const url = this.values.developAddress + '/fields/write';
    return this.http.post(
      url, `submenu=${submenu}&title=${title}&tags=${tags}&content=${content}&selector=${selector}&validator=${validator}`, this.options)
      .toPromise()
      .then(response => response.json().data as Object)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
