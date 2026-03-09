import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly usersUrl = 'http://user-service/api/users';
  private readonly productsUrl = 'http://product-service/api/products';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl);
  }
}

