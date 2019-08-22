import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product details';
  product: Product;

  constructor(private activeRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
    let productId = +this.activeRoute.snapshot.paramMap.get('id');
    this.pageTitle += `${productId}`;
    this.product =  this.productService.getProductById(productId);
    console.log('Current product id = ' , productId);
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }

}
