import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _httpClient: HttpClient,
  ) { }

  getProductCategories(): Observable<any> {
    return this._httpClient.get(`${environment.apiURL}GetAllCategory`)
  };

  createProduct(data: any): Observable<any> {
    return this._httpClient.post(`${environment.apiURL}CreateProduct`, data)
  }

  fetchProducts(): Observable<any> {
    return this._httpClient.get(`${environment.apiURL}GetAllProducts`)
  }

  upadteProduct(data: any): Observable<any> {
    return this._httpClient.post(`${environment.apiURL}UpadteProduct`, data)
  }

  deleteProduct(productId: string): Observable<any> {
    return this._httpClient.get(`${environment.apiURL}/DeleteProductById?id=${productId}`)
  }

  // Get All Categories

  getAllCategories(): Observable<any> {
    return this._httpClient.get(`${environment.apiURL}/GetAllCategory`).pipe(
      map((res: any) => {
        return res.data
      }))
  }
}
