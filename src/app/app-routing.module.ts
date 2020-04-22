import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./components/signup/signup.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { ProfileComponent } from "./components/profile/profile.component";

const routes: Routes = [
    { path: "signup", component: SignupComponent },
    { path: "profile", component: ProfileComponent },
    {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuardService],
    },
    { path: "", component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
