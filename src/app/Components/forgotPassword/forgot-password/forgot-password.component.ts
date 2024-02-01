
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  email: string = '';
  serverResponse: string = '';

  constructor(private http: HttpClient) {}

  submit() {
    const resetPasswordRequest = { email: this.email };
    this.http.post<any>('/api/forgotpassword', resetPasswordRequest)
      .subscribe(
        response => {
          this.serverResponse = response.message;
        },
        error => {
          console.error('Error:', error);
          this.serverResponse = 'An error occurred while processing your request.';
        }
      );
  }
}