/**
 * Created by Hyeonmin on 2017-04-03.
 */

import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {ListAndTotal} from '../Models/List';
import {ValueService} from './values.service';

@Injectable()
export class TaxNewsService {

  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  options = new RequestOptions({headers: this.headers});

  constructor(
    private http: Http,
    private values: ValueService
  ) { }

  getTaxNews(page: number, search: string): Promise<ListAndTotal> {
    const url = this.values.backendAddress + `/tax_news/${page}/${search}`;
    console.log(url);
    return this.http.get(url)
      .toPromise()
      .then(response =>
        new ListAndTotal(response.json().data['list'] as Object[], response.json().data['total'], response.json().data['pageSize']))
      .catch(this.handleError);
  }

  writeTaxNews(title: string, tags: string, content: string, selector: string, validator: string): Promise<Object> {
    const url = this.values.backendAddress + '/tax_news/write';
    return this.http.post(
      url, `&title=${title}&tags=${tags}&content=${content}&selector=${selector}&validator=${validator}`, this.options)
      .toPromise()
      .then(response => response.json().data as Object)
      .catch(this.handleError);
  }

  modifyTaxNews(id: number, title: string, tags: string, content: string, selector: string, validator: string): Promise<Object> {
    const url = this.values.backendAddress + '/tax_news/modify';
    return this.http.patch(
      url, `id=${id}&title=${title}&tags=${tags}&content=${content}&selector=${selector}&validator=${validator}`, this.options)
      .toPromise()
      .then(response => response.json().data as Object)
      .catch(this.handleError);
  }

  deleteTaxNews(id: number, selector: string, validator: string): Promise<Object> {
    const url = this.values.backendAddress + '/tax_news/delete';
    return this.http.put(
      url, `id=${id}&selector=${selector}&validator=${validator}`, this.options)
      .toPromise()
      .then(response => response.json().data as Object)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
