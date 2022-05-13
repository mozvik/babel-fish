import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _baseUrl = `${environment.baseUrl}`

  constructor(private http: HttpClient) { }

  languages(): Observable<any[]>{
    return this.http.get<any[]>(`${this._baseUrl}/languages`)
  }

  translate(text: string, sourceLanguage: string, targetLanguage: string): Observable<any> { 
    let formData = new FormData();
    formData.append('q', text);
    formData.append('source', sourceLanguage);
    formData.append('target', targetLanguage);
    formData.append('format', 'text');
    return this.http.post<any>(`${this._baseUrl}/translate`, formData)
  }

  detect(text: string): Observable<any[]> {
    {
      let formData = new FormData();
      formData.append('q', text);
      return this.http.post<any[]>(`${this._baseUrl}/detect`, formData)
    }
  }

}
