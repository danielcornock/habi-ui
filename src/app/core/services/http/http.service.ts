import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  public get<T>(url: string): Observable<T> {
    const completeUrl = this.generateUrl(url);

    return this.httpClient.get<T>(completeUrl);
  }

  public post<T>(url: string, data: any): Observable<T> {
    const completeUrl = this.generateUrl(url);

    return this.httpClient.post<T>(completeUrl, data);
  }

  public delete(url: string): Observable<void> {
    const completeUrl = this.generateUrl(url);

    return (this.httpClient.delete(completeUrl) as unknown) as Observable<void>;
  }

  private generateUrl(url: string): string {
    return environment.apiUrl + url;
  }
}
