
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {

  constructor(private apiService : ApiService) { }

  userList: any = [];
  ModalTitle = "";
  ActivateAddEditUserComp: boolean = false;
  user: any;

  ngOnInit(): void {
    this.refreshDepList();
  }

  

  editClick(item: any) {
    this.user = item;
    this.ModalTitle = "Edit User";
    this.ActivateAddEditUserComp = true;
  }

  deleteClick(item: any) {
    console.log('item',item);
    if (confirm('Are you sure??')) {
      this.apiService.deleteUser(item.userId).subscribe(data => {
        alert(data.message.toString());
        this.refreshDepList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditUserComp = false;
    this.refreshDepList();
  }


  refreshDepList() {
    this.apiService.getUsers().subscribe(data => {
      this.userList = data.result;
     
    });
  }

}