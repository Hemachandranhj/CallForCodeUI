import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { UserState } from "./models/user-state.model";
import { AuthenticationService } from "./services/authentication.service";
import { Router, ROUTES } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
    title = "volunteer";
    signInURL = "";
    signUpUrl = "";
    logoutUrl = "";
    isUserLoggedIn = false;
    userState: UserState;

    constructor(private authService: AuthenticationService,
        private router: Router) {
        this.authService.currentUser.subscribe((x) => {
            this.userState = x;
            if (this.userState && this.userState.logged) {
                this.isUserLoggedIn = true;
            }
        });
    }

    ngOnInit() {
        this.signInURL = environment.apiBaseUrl + "/auth/login";
        this.signUpUrl = environment.apiBaseUrl + "/auth/signup";
        this.logoutUrl = environment.apiBaseUrl + "/auth/logout";
    }

    redirctToProfile() {
        this.router.navigate(["profile"]);
    }
    logout() {
        this.authService.logout();
        window.location.href = this.logoutUrl;
    }
}
