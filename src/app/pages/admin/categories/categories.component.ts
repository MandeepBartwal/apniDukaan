import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  Products$: Observable<any>;
  constructor(
    public _productService: ProductService
  ) {
    this.Products$ = this._productService.getAllCategories()
  }
  ngOnInit(): void {
  }

  // public getAllCategories(){
  //   this._productService.getAllCategories().subscribe((res:any) => {
  //     this.categoriesList = res.data
  //   })
  // }
} 
