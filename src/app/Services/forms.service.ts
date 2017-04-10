/**
 * Created by Hyeonmin on 2017-04-10.
 */

import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {ListAndTotal} from '../Models/List';
import {ValueService} from './values.service';

@Injectable()
export  class FormsService {

  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  options = new RequestOptions({headers: this.headers});

  constructor(private http: Http,
              private values: ValueService) {
  }

  getForms(): Promise<Object[]> {
    const url = this.values.backendAddress + '/forms/list';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Object[])
      .catch(this.handleError);
  }

  uploadForm(title: string, file_url: string, selector: string, validator: string): Promise<Object> {
    const url = this.values.backendAddress + '/forms/upload';
    return this.http.post(
      url, `title=${title}&file_url=${file_url}&selector=${selector}&validator=${validator}`, this.options)
      .toPromise()
      .then(response => response.json().data as Object)
      .catch(this.handleError);
  }

  deleteForm(id: number, selector: string, validator: string): Promise<Object> {
    const url = this.values.backendAddress + '/forms/delete';
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
