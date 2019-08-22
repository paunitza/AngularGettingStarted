import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'api/products/products.json';
  private products: Product[];

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productUrl)
      .pipe(
        tap(data => {
          console.log('Received: ', JSON.stringify(data));
          this.products = data;
        }
        ),
        catchError(this.handleError)
      );
  }

  private handleError(handleError: HttpErrorResponse) {
    const errorMessage = 'Server responded with: ' + handleError.message + handleError.statusText;
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  getProductById(productId: number): Product {
    return this.products.filter(product => product.productId === productId)[0];
  }

}
