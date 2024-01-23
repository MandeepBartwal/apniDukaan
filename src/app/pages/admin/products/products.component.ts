import { Products } from './products.types';
import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../shared/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  isSidePannelVisible: boolean = false;
  isUpdatingPrdouct: boolean = false;
  createProductForm: FormGroup = new FormGroup({});
  constructor(public _formBuilder: FormBuilder, private _productService: ProductService, public _toastr: ToastrService) { }
  prodouctObj: any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": ""
  };
  productCategories: any[] = [];
  productList: any[] = [];
  ngOnInit(): void {
    this.createProductForm = this._formBuilder.group({
      productSku: [''],
      productName: [''],
      productPrice: [0],
      productShortName: [''],
      productDescription: [''],
      createdDatevenmo: [''],
      deliveryTimeSpan: [''],
      productImageUrl: [''],
      categoryId: [0]
    });

    this.getProductCategories();
    this.fetchProducts()
  }

  public getProductCategories() {
    this._productService.getProductCategories().subscribe((res: any) => {
      this.productCategories = res.data;
    })
  }
  showSuccess(message: string) {
    this._toastr.success(message, 'Toastr fun!');
  }

  public createProduct() {
    this._productService.createProduct(this.createProductForm.value).subscribe((res: any) => {
      if (res.result) {
        this.showSuccess(res.message);
      }
    })
  }

  public fetchProducts() {
    this._productService.fetchProducts().subscribe((res: any) => {
      this.productList = res.data;
    })
  }

  public editProduct(product: any) {
    this.isUpdatingPrdouct = true;
    this.isSidePannelVisible = true;
    this.createProductForm.patchValue(product)
  }

  public updateProduct() {
    this._productService.upadteProduct(this.createProductForm.value).subscribe((res: any) => {
      this.fetchProducts();
    })
  }

  public deleteProduct(productId: string) {
    this._productService.deleteProduct(productId).subscribe((res: any) => {
      console.log(res);
      if (res.result) {
        let index = this.productList.findIndex(item => item._id === productId);
        this.productList.splice(index, 1)
      }
    })
  }

  addNewProdoct() {
    this.isSidePannelVisible = true;
  }
}
