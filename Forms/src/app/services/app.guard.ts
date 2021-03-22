import { Injectable } from "@angular/core";
import { CanActivate, CanLoad } from "@angular/router";

@Injectable()
export class AuthGuard implements CanLoad, CanActivate{

    user = {adim: true, logged: true}

    canLoad() : boolean{
        return this.user.adim;
    }

    canActivate() : boolean{
        return this.user.logged;
    }
}