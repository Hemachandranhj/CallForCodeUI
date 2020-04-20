import { Injectable } from "@angular/core";
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
} from "@angular/router";
import { AuthenticationService } from "./authentication.service";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AuthGuardService implements CanActivate {
    private authUrl = "";
    constructor(
        private router: Router,
        private authService: AuthenticationService
    ) {
        this.authUrl = environment.apiBaseUrl + "/auth/login";
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.authService.isAuthenticated().pipe(
            map((user) => {
                if (user && user.logged) {
                    return true;
                }
                window.location.href = this.authUrl;
                return false;
            })
        );
    }
}
