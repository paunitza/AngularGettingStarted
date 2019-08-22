import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router) { }

  // tslint:disable-next-line: max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const id: string = route.url[1].path; // route.paramMap.get('id');
    if (isNaN(+id) || +id < 1) {
      console.log('Invalid value for id: ', id, ' you will be redirected to /products');
      alert('Invalid value for id: ' + id);
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }

}
