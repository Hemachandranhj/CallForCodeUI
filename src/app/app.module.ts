import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SignupComponent } from "./components/signup/signup.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { AuthenticationService } from "./services/authentication.service";
import { HomeComponent } from "./components/home/home.component";
import { CardDetailsComponent } from "./components/card-details/card-details.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AssistanceService } from "./services/assistance.service";
import { ProfileService } from "./services/profile.service";

@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        CardDetailsComponent,
        DashboardComponent,
        HomeComponent,
        ProfileComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    providers: [
        AuthGuardService,
        AuthenticationService,
        AssistanceService,
        ProfileService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
