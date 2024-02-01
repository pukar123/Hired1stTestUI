

import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  @Input() user: any;
  UserId = "";
  FirstName = "";
  LastName = "";
  Email = "";

  ngOnInit(): void {
    this.UserId = this.user.userId;
    this.FirstName = this.user.firstName;
    this.LastName = this.user.lastName;
    this.Email = this.user.email;
    console.log(this.user);
  }

  addUser() {
    var userEnt = {
      UserId: this.UserId,
      FirstName: this.FirstName,
      LastName: this.LastName,
      Email: this.Email,
    };
    this.apiService.updateUser(userEnt).subscribe(res => {
      alert(res.message);
    });
  }

  updateUser() {
    var userEnt = {
      UserId: this.UserId,
      FirstName: this.FirstName,
      LastName: this.LastName,
      Email: this.Email
    };
    this.apiService.updateUser(userEnt).subscribe(res => {
      alert(res.message);
    });
  }
}