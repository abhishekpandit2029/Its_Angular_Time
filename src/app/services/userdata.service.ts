import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient) { }
  users() {
    // services basically for reusable functional
    return [
      { id: 1, name: 'John', age: 25 },
      { id: 2, name: 'Jane', age: 30 },
    ]
  }
  getUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}
