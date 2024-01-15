import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  createProduct(data:any): Observable<any> {
    return this._httpClient.post(`${environment.apiURL}CreateProduct`, data)
  }


}
