import { Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'ACME Products';
  showImage: boolean = false;

  products: Product[];
  errorMessage: any;

  constructor(private psvc: ProductService) {
  }

  filteredProducts: Product[];
  _listFilter: string;

  set listFilter(listFilter: string) {
    console.log('Setting filter to ', listFilter, ' was ', this._listFilter);
    this._listFilter = listFilter;
    this.filteredProducts = this._listFilter ? this.performFilteringByProperty(this._listFilter) : this.products;
  }

  get listFilter(): string {
    return this._listFilter;
  }

  performFilteringByProperty(_listFilter: string): Product[] {
    return this.products.filter(product => product.productName.toLocaleLowerCase().indexOf(_listFilter.toLocaleLowerCase()) !== -1);
  }

  ngOnInit() {
    this.psvc.getProducts().subscribe({
      next: products => {
        console.log('success:', products);
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => {
        console.log('error:', err);
        this.errorMessage = err.message;
      }
    });

  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    console.log('received message: ', message);
    this.pageTitle = message;
  }

}
