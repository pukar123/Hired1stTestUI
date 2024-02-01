
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private apiService : ApiService) { }

  userList: any = [];
  ModalTitle = "";
  ActivateAddEditUserComp: boolean = false;
  user: any;

 // DepartmentIdFilter = "";
  //DepartmentNameFilter = "";
  //DepartmentListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick() {
    this.user = {
      DepartmentId: "0",
      DepartmentName: ""
    }
    this.ModalTitle = "Add User";
    this.ActivateAddEditUserComp = true;
  }

  editClick(item: any) {
    this.user = item;
    this.ModalTitle = "Edit User";
    this.ActivateAddEditUserComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.apiService.deleteUser(item.DepartmentId).subscribe(data => {
        alert(data.toString());
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
     // this.DepartmentListWithoutFilter = data;
    });
  }

  // sortResult(prop: any, asc: any) {
  //   this.DepartmentList = this.DepartmentListWithoutFilter.sort(function (a: any, b: any) {
  //     if (asc) {
  //       return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
  //     }
  //     else {
  //       return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
  //     }
  //   });
  // }

  // FilterFn() {
  //   var DepartmentIdFilter = this.DepartmentIdFilter;
  //   var DepartmentNameFilter = this.DepartmentNameFilter;

  //   this.DepartmentList = this.DepartmentListWithoutFilter.filter(
  //     function (el: any) {
  //       return el.DepartmentId.toString().toLowerCase().includes(
  //         DepartmentIdFilter.toString().trim().toLowerCase()
  //       ) &&
  //         el.DepartmentName.toString().toLowerCase().includes(
  //           DepartmentNameFilter.toString().trim().toLowerCase())
  //     }
  //   );
  // }
}