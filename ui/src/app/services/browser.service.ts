import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  constructor(private http: HttpClient) { }

  list(path?: String) {
    let url = `http://localhost:3000/api/files`
    if (path != undefined && path != 'undefined') url += `?path=${path}`
    return this.http.get(url)
  }
}


