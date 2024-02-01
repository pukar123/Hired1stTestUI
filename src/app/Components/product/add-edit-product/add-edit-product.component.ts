
import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormsModule } from '@angular/forms';
import { ShowProductComponent } from '../show-product/show-product.component';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {

  constructor(private apiService: ApiService,private showProdComponent:ShowProductComponent) { }

  @Input() product: any;
  Id = "";
  Name = "";
  Price = "";
  Description = "";
  UserId="";

  ngOnInit(): void {
    this.Id = this.product.id;
    this.Name = this.product.name;
    this.Price = this.product.price;
    this.Description = this.product.description;
    this.UserId="";
  }

  addProduct() {
    var prodEnt = {
      Id: "",
      Name: this.Name,
      Price: this.Price,
      Description: this.Description,
      UserId:""
    };
    this.apiService.addProduct(prodEnt).subscribe(res => {
      alert(res.message);
    });
    this.showProdComponent.refreshProductList();
  }

  updateProduct() {
    var prodEnt = {
      Id: this.Id,
      Name: this.Name,
      Price: this.Price,
      Description: this.Description,
      UserId:""
    };
    this.apiService.updateProduct(prodEnt).subscribe(res => {
      alert(res.message);
    });
    this.showProdComponent.refreshProductList();
  }
}