import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { 
     
  }

  sendMessage(message: object): Observable<any> {
    const url = 'https://8lopf4p70a.execute-api.eu-west-2.amazonaws.com/dev/static-site-mailer';

    // this.http.post<any>(url, message)

    return this.http.post<any>(url, message);
  }
}
