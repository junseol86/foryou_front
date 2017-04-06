/**
 * Created by Hyeonmin on 2017-04-06.
 */
import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {ListAndTotal} from '../Models/List';
import {ValueService} from './values.service';

@Injectable()
export  class ConsultingApplyService {

  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  options = new RequestOptions({headers: this.headers});

  constructor(private http: Http,
              private values: ValueService) {
  }

  writeQna(asker: string, email: string, password: string, title: string, question: string): Promise<Object> {
    const url = this.values.developAddress + '/online_consulting/qna/write_question';
    return this.http.put(
      url, `asker=${asker}&email=${email}&password=${password}&title=${title}&question=${question}`, this.options)
      .toPromise()
      .then(response => response.json().data as Object)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
