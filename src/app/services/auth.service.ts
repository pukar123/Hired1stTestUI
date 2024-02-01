import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public localStorageSubject = new BehaviorSubject<any>(localStorage.getItem('token') );
  private baseUrl: string = "https://localhost:7123/api/v1/authenticate/"
  constructor(private http: HttpClient, private router:Router) { }


  signUp(request: any) {
    return this.http.post<any>(`${this.baseUrl}Register`, request)
  }
  
  login(request: any) {
    return this.http.post<any>(`${this.baseUrl}login`, request)
  }
  forgotPassword(request: any) {
    return this.http.post<any>(`${this.baseUrl}forgotPassword`, request)
  }
  signOut(){
    localStorage.clear();
    this.localStorageSubject.next(null);
    this.router.navigate(['login']);
  }
  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue)
    this.localStorageSubject.next(tokenValue);
  }
  getToken(){
    return this.localStorageSubject.value;
  }

  isLoggedIn():boolean{
    return !!localStorage.getItem('token');
  }
}

