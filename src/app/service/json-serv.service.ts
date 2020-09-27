import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonServService {

  constructor(private http:HttpClient) { }

  testMethod(){ return 'Hiee'}
  readJsonData()
  {
    return this.http.get('./assets/posts.json');
  }
}
