import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {AuthService} from "../services/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  private activate = false;
  constructor(private authService : AuthService, private router : Router){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.authenticatedOf.pipe(
      map((authenticated: boolean) => {
        console.log(authenticated);
        if (authenticated) {
          return this.router.parseUrl('')
        }
        return true
      })
    );

  }

}
