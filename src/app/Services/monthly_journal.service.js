"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Hyeonmin on 2017-03-23.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var MonthlyJournalService = (function () {
    function MonthlyJournalService(http, values) {
        this.http = http;
        this.values = values;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    MonthlyJournalService.prototype.getSchedules = function (year, month) {
        var url = this.values.backendAddress + ("/monthly_journal/" + year + "/" + month);
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    MonthlyJournalService.prototype.addASchedule = function (year, month, date, content, selector, validator) {
        var url = this.values.backendAddress + '/monthly_journal/add_schedule';
        return this.http.post(url, "year=" + year + "&month=" + month + "&date=" + date + "&content=" + content + "&selector=" + selector + "&validator=" + validator, this.options)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    MonthlyJournalService.prototype.deleteASchedule = function (year, month, date, id, selector, validator) {
        var url = this.values.backendAddress + '/monthly_journal/delete_schedule';
        return this.http.put(url, "year=" + year + "&month=" + month + "&date=" + date + "&id=" + id + "&selector=" + selector + "&validator=" + validator, this.options)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    MonthlyJournalService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return MonthlyJournalService;
}());
MonthlyJournalService = __decorate([
    core_1.Injectable()
], MonthlyJournalService);
exports.MonthlyJournalService = MonthlyJournalService;
