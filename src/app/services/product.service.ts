import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://api.escuelajs.co/api/v1/products';
  

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<any[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response?._embedded?.products)
    );
  }

  getProducts(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.baseUrl);
  }
}
interface GetResponse{
  _embedded:{
    products: any[];
  }
}
