import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'HiredFirstAngProj';
  isLoggedInObservable = this.auth.localStorageSubject.asObservable();
isLoggedIn = this.auth.isLoggedIn();
  constructor(private auth: AuthService) { }
  
  ngOnInit(): void {
    this.isLoggedInObservable.subscribe(value => {
      this.isLoggedIn = this.auth.isLoggedIn(); // Store the received value
    });
  }
  logout(){
    this.auth.signOut();
  }
}
