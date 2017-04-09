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

  getQnas(page: number, search: string): Promise<ListAndTotal> {
    const url = this.values.developAddress + `/online_consulting/qna/${page}/${search}`;
    console.log(url);
    return this.http.get(url)
      .toPromise()
      .then(response =>
        new ListAndTotal(response.json().data['list'] as Object[], response.json().data['total'], response.json().data['pageSize']))
      .catch(this.handleError);
  }

  readQuestion(id: number, selector: string, validator: string, password: string): Promise<Object> {
    const url = this.values.developAddress + '/online_consulting/qna/read_question';
    return this.http.post(
      url, `id=${id}&selector=${selector}&validator=${validator}&password=${password}`, this.options)
      .toPromise()
      .then(response => response.json().data as Object)
      .catch(this.handleError);
  }

  writeQna(asker: string, email: string, password: string, title: string, question: string): Promise<Object> {
    const url = this.values.developAddress + '/online_consulting/qna/write_question';
    return this.http.post(
      url, `asker=${asker}&email=${email}&password=${password}&title=${title}&question=${question}`, this.options)
      .toPromise()
      .then(response => response.json().data as Object)
      .catch(this.handleError);
  }

  answerQuestion(id: number, answer: string, selector: string, validator: string): Promise<Object> {
    const url = this.values.developAddress + '/online_consulting/qna/answer_question';
    return this.http.patch(
      url, `id=${id}&answer=${answer}&selector=${selector}&validator=${validator}`, this.options)
      .toPromise()
      .then(response => response.json().data as Object)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
