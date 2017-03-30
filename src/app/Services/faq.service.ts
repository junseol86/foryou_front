/**
 * Created by Hyeonmin on 2017-03-29.
 */

import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {ListAndTotal} from '../Models/List';
import {ValueService} from './values.service';

@Injectable()
export  class FaqService {

  headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  options = new RequestOptions({ headers: this.headers });

  constructor(
    private http: Http,
    private values: ValueService
  ) { }

  getFaqs(page: number): Promise<ListAndTotal> {
    const url =  this.values.backendAddress + '/online_consulting/faq/' + page;
    return this.http.get(url)
      .toPromise()
      .then(response =>
        new ListAndTotal(response.json().data['list'] as Object[], response.json().data['total'], response.json().data['pageSize']))
      .catch(this.handleError);
  }

  addFaq(topic: string, question: string, answer: string, selector: string, validator: string): Promise<Object> {
    const url = this.values.backendAddress + '/online_consulting/faq/add';
    return this.http.put(
      url, `topic=${topic}&question=${question}&answer=${answer}&selector=${selector}&validator=${validator}`, this.options)
      .toPromise()
      .then(response => response.json().data as Object)
      .catch(this.handleError);
  }

  modifyFaq(id: number, topic: string, question: string, answer: string, selector: string, validator: string): Promise<Object> {
    const url = this.values.backendAddress + '/online_consulting/faq/modify';
    return this.http.patch(
      url, `id=${id}&topic=${topic}&question=${question}&answer=${answer}&selector=${selector}&validator=${validator}`, this.options)
      .toPromise()
      .then(response => response.json().data as Object)
      .catch(this.handleError);
  }

  deleteFaq(id: number, selector: string, validator: string): Promise<Object> {
    const url = this.values.backendAddress + '/online_consulting/faq/delete';
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
