import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonServiceService {

  constructor(private httpClient : HttpClient) { }

  get(): Promise<string> {
    return this.httpClient.get<string>('/api').toPromise();
  }
}
