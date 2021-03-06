/**
 * Created by Hyeonmin on 2017-04-03.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var List_1 = require("../Models/List");
var FieldsService = (function () {
    function FieldsService(http, values) {
        this.http = http;
        this.values = values;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    FieldsService.prototype.getFields = function (submenu, page, search) {
        var url = this.values.backendAddress + ("/fields/" + submenu + "/" + page + "/" + search);
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            return new List_1.ListAndTotal(response.json().data['list'], response.json().data['total'], response.json().data['pageSize']);
        })
            .catch(this.handleError);
    };
    FieldsService.prototype.writeFields = function (submenu, title, tags, content, selector, validator) {
        var url = this.values.backendAddress + '/fields/write';
        return this.http.post(url, "submenu=" + submenu + "&title=" + title + "&tags=" + tags + "&content=" + content + "&selector=" + selector + "&validator=" + validator, this.options)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    FieldsService.prototype.modifyFields = function (id, title, tags, content, selector, validator) {
        var url = this.values.backendAddress + '/fields/modify';
        return this.http.patch(url, "id=" + id + "&title=" + title + "&tags=" + tags + "&content=" + content + "&selector=" + selector + "&validator=" + validator, this.options)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    FieldsService.prototype.deleteFields = function (id, selector, validator) {
        var url = this.values.backendAddress + '/fields/delete';
        return this.http.put(url, "id=" + id + "&selector=" + selector + "&validator=" + validator, this.options)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    FieldsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return FieldsService;
}());
FieldsService = __decorate([
    core_1.Injectable()
], FieldsService);
exports.FieldsService = FieldsService;
