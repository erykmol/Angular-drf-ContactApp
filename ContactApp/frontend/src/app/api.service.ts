import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = 'http://127.0.0.1:8000';
  headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  sendForm(form): Observable<any> {
    // { name: form.name, email: form.email, subject: form.subject, message: form.message };
    const body = JSON.stringify(form);
    return this.http.post(this.baseurl  + '/contact/', body, { headers: this.headers });

  }
}
