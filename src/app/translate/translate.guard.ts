import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../register/models/user.model';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TranslateGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.user
      || !this.authService.translateCount
      || this.authService.translateCount < 3
      ?  true : this.router.navigateByUrl('/register');
  }
  
}
