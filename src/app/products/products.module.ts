import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forChild([{
      path: 'products', component: ProductListComponent
    },
    {
      path: 'products/:id', component: ProductDetailComponent,
      canActivate: [ProductDetailGuard]
    }]),
    SharedModule]
})
export class ProductsModule { }
