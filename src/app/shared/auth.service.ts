import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUrl = 'https://codingthailand.com/api/insert_user5.php';
  loginUrl = 'https://dev-nh5rn5oj.us.auth0.com/oauth/token'

  constructor(private http: HttpClient) { }

  register(formValues: any): Observable<any> {

    const headers = { 'Content-Type': 'application/json' };

    return this.http.post<any>(this.registerUrl, formValues, {headers});
  }

  login(formValues: any): Observable<any>{

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const body = {
      'grant_type':'password',
      'username':'test@gmail.com',
      'password':'12345678A!',
      'audience':'https://ng-online.us.auth0.com/api/v2/',
      'scope':'openid',
      'client_id':'QhhyXG1aBGyiEqWLbXWz1NGyxhKtQw7t'
    }

    console.log(formValues.email);
    console.log(formValues.password);


    return this.http.post<any>(this.loginUrl, body, {headers});

  }
}
