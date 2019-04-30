import { Injectable } from '@angular/core';
import {environment} from './../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  });
  // private serviceUrl = environment.apiHost + ':' + environment.apiPort;
  constructor(private http: HttpClient) { }

  signUp(signValue) {
    return this.http.post('http://localhost:9000/saveitem', signValue, {headers: this.headers});
  }

  login(loginValue): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:9000/deleteitem/' + loginValue , {headers: this.headers});
  }

  // borrowedItems(borrowItems) {
  //   return this.http.post('http://localhost:9000/borrowitem', borrowItems, {headers: this.headers});
  // }

  // returnAllItems(ISBN): Observable<any[]> {
  //   return this.http.get<any[]>('http://localhost:9000/returnItem/' + ISBN, {headers: this.headers});
  // }

  // displayAllItems(): Observable<any[]> {
  //   return this.http.get<any[]>('http://localhost:9000/displayitems', {headers: this.headers});
  // }

  // getFreeSpaces(): Observable<any[]> {
  //   return this.http.get<any[]>('http://localhost:9000/additem', {headers: this.headers});
  // }

  // generateAReport(): Observable<any[]> {
  //   return this.http.get<any[]>('http://localhost:9000/report', {headers: this.headers});

  // }
  // getAvailableSlots():Observable<any[]>{
  //   return this.http.get<any[]>('http://localhost:9000/availableSlots',{headers: this.headers})
  // }


}
