import { Inject, Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ContentfulService {

  CONFIG = {
    space: this.environment.space,
    accessToken: this.environment.accessToken,
  }

  constructor(
    private http: HttpClient,
    @Inject('env') private environment
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

    if (!search) { 
      search = 'homepage';
    }

    const path = `/spaces/${this.CONFIG.space}/environments/master/entries?access_token=${this.CONFIG.accessToken}&content_type=${contentType}&fields.url=${search}`;
    const url =  'https://cdn.contentful.com' + path;

    return this.http.get(url, this.createHeaders());
  }
}
