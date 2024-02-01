import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'https://localhost:7123/api/v1/';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(`${this.baseUrl}user`);
  }
  
  updateUser(request: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(`${this.baseUrl}user/UpdateUser`, request, httpOptions);
  }

  deleteUser(request: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<any>(`${this.baseUrl}user/DeleteUser?request=${request}`, httpOptions);
  }

  getProductList() {
    return this.http.get<any>(`${this.baseUrl}product/allProduct`);
  }
  

  addProduct(request: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.baseUrl + 'product/addNew', request, httpOptions);
  }

  updateProduct(request: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.baseUrl + 'product/UpdateProduct', request, httpOptions);
  }

  deleteProduct(request: string): Observable<number> {
    console.log("request",request);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.baseUrl + 'product/DeleteProduct?request=' + request, httpOptions);
  }

}
