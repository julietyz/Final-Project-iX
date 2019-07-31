import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
  constructor(
    private router: Router
  ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> |boolean | UrlTree {
      console.log('AuthGuard#canActivate called');
      return this.checkLogin(localStorage.getItem('isLoggedIn'));
    }

    checkLogin(isLoggenInBoolean: string): boolean{
      if(isLoggenInBoolean == 'false'){
        this.router.navigate(['/login']);
        return false;
      } else if (isLoggenInBoolean == 'true'){
        return true;
      }
    }
}
