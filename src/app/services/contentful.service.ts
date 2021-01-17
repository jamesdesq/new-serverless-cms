import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';


const CONFIG = {
  space: environment.space,
  accessToken: environment.accessToken,
}

@Injectable({
  providedIn: 'root'
})

export class ContentfulService {

  constructor(
    private http: HttpClient
  ) {
  }

  createHeaders(): any {
    const httpOptions = {headers: new HttpHeaders({
        'Content-Type':  'application/json',
        })
    };
    return httpOptions;
  }

  getContentItemByUrl(search: string, contentType: string): Observable<any> {

    const path = `/spaces/${CONFIG.space}/environments/master/entries?access_token=${CONFIG.accessToken}&content_type=${contentType}&fields.url=${search}`;
    const url =  'https://cdn.contentful.com' + path;

    return this.http.get(url, this.createHeaders());
  }
}
