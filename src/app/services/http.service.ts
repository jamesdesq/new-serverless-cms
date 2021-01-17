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
    const url = '';

    return this.http.post<any>(url, message);
  }
}
