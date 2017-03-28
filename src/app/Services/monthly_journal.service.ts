/**
 * Created by Hyeonmin on 2017-03-23.
 */
import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {ValueService} from './values.service';
import {Schedule} from '../Models/MonthlyJournal';


@Injectable()
export class MonthlyJournalService {

  headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  options = new RequestOptions({ headers: this.headers });

  constructor(
    private http: Http,
    private values: ValueService
  ) { }


  getSchedules(year: number, month: number): Promise<Schedule[]> {
    const url =  this.values.backendAddress + `/monthly_journal/${year}/${month}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Schedule[])
      .catch(this.handleError);
  }

  addASchedule(
    year: number, month: number, date: number, content: string, selector: string, validator: string): Promise<Schedule[]> {
    const url = this.values.backendAddress + '/monthly_journal/add_schedule';
    return this.http.post(
      url, `year=${year}&month=${month}&date=${date}&content=${content}&selector=${selector}&validator=${validator}`, this.options)
      .toPromise()
      .then(response => response.json().data as Schedule[])
      .catch(this.handleError);
  }

  deleteASchedule(
    year: number, month: number, date: number, id: number, selector: string, validator: string): Promise<Schedule[]> {
    const url = this.values.backendAddress + '/monthly_journal/delete_schedule';
    return this.http.put(
      url, `year=${year}&month=${month}&date=${date}&id=${id}&selector=${selector}&validator=${validator}`, this.options)
      .toPromise()
      .then(response => response.json().data as Schedule[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
