import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable'

export class UserToken { }

export class Permissions {
  canActivate(user: UserToken, path: string): boolean {
    console.log(path);
    //验证代码待完成，此处直接返回false
    alert("你无权访问"+path);
    return false;
  }
}

@Injectable()
export class AppGuardService implements CanActivate {
  constructor(private permissions: Permissions, private currentUser: UserToken) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.permissions.canActivate(this.currentUser, state.url);
  }
}
