import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(state)
      const token = localStorage.getItem('token');
    if (token) {
      return true
      // Token is present in local storage, check if it is valid
      /*const decodedToken = this.authService.decodeToken(token);
      const expirationDate = new Date(decodedToken.exp * 1000);
      const now = new Date();
      */
    }

    // Token is not present or expired, redirect to login page with returnUrl
    
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}

