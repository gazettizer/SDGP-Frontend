import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var LibraryService = /** @class */ (function () {
    // private serviceUrl = environment.apiHost + ':' + environment.apiPort;
    function LibraryService(http) {
        this.http = http;
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        });
    }
    LibraryService.prototype.saveAllItems = function (saveItem) {
        return this.http.post('http://localhost:9000/saveitem', saveItem, { headers: this.headers });
    };
    LibraryService.prototype.deletedItems = function (isbn) {
        return this.http.get('http://localhost:9000/deleteitem/' + isbn, { headers: this.headers });
    };
    LibraryService.prototype.borrowedItems = function (borrowItems) {
        return this.http.post('http://localhost:9000/borrowitem', borrowItems, { headers: this.headers });
    };
    LibraryService.prototype.returnAllItems = function (ISBN) {
        return this.http.get('http://localhost:9000/returnItem/' + ISBN, { headers: this.headers });
    };
    LibraryService.prototype.displayAllItems = function () {
        return this.http.get('http://localhost:9000/displayitems', { headers: this.headers });
    };
    LibraryService.prototype.getFreeSpaces = function () {
        return this.http.get('http://localhost:9000/additem', { headers: this.headers });
    };
    LibraryService.prototype.generateAReport = function () {
        return this.http.get('http://localhost:9000/report', { headers: this.headers });
    };
    LibraryService.prototype.getAvailableSlots = function () {
        return this.http.get('http://localhost:9000/availableSlots', { headers: this.headers });
    };
    LibraryService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], LibraryService);
    return LibraryService;
}());
export { LibraryService };
//# sourceMappingURL=library.service.js.map