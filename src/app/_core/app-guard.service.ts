import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of';

export class Account {
  id:string;
  name:string;
  roles:any[];
}

export class AuthService {
  account: Account;
  login(userId: string): Account {
    let account =new Account();
    // account.id = "11";
    // account.name = 'super man';
    // account.roles = ["todo"];
    // this.account = account;
    return account;
 }
 getAccount(){}
 isLogdedin(){}
 hasRole(){}


  canActivate(router: Router, path: string): boolean {
    console.log(path);
    //验证代码待完成，此处直接返回false
    alert("你无权访问" + path);
    return false;
  }
}

@Injectable()
export class AppGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.canActivate(this.router, state.url);
  }
}
