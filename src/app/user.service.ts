import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export const LSKEY = "currentUser";
export const TOKENKEY = "webtoken";

export interface UserData {
  userName: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  baseURL = 'http://localhost:8080/jbugs';

  constructor(private http: HttpClient) { }


  validateUserCredentials(username: string, password: string): Observable<any> {

    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    return this.http.post(this.baseURL + '/authorize',
      body.toString(),
      {
        headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
      });
  }
}
