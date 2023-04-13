import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface/product';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://localhost:7059/api/Ventas');
   }
   create(payload:Product){
    return this.httpClient.post<Product>('http://localhost:3000/students', payload);
   }

   getById(id: number): Observable<Product> {
    return this.httpClient.get<Product>('http://localhost:3000/students/${id}');
  }

  update(payload: Product): Observable<Product> {
   return this.httpClient.put<Product>(
    `http://localhost:3000/students/${payload.Id}`,
    payload
   );
  }

  delete(id: number) {
    return this.httpClient.delete('http://localhost:3000/students/${id}');
  }
}

