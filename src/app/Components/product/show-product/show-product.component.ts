

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {

  constructor(private apiService : ApiService) { }

  productList: any = [];
  ModalTitle = "";
  ActivateAddEditProductComp: boolean = false;
  product: any;

 
  ngOnInit(): void {
    this.refreshProductList();
  }

  addClick() {
    this.product = {
      Id:"",
      Name: "",
      Description: "",
      Price: "",
      UserId:""
    }
    this.ModalTitle = "Add Product";
    this.ActivateAddEditProductComp = true;
  }

  editClick(item: any) {
    this.product = item;
    this.ModalTitle = "Edit Product";
    this.ActivateAddEditProductComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.apiService.deleteProduct(item.id).subscribe({
        next: (data) => {
          alert(data.toString());
          this.refreshProductList();
        },
        error: (err) => {
          alert(err.toString())
        }
        
      })
    }
  }

  closeClick() {
    this.ActivateAddEditProductComp = false;
    this.refreshProductList();
  }


  refreshProductList() {
    this.apiService.getProductList().subscribe(data => {
      this.productList = data.result;
    });
  }

  
}