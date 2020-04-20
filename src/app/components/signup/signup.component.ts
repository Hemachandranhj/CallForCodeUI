import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
    selector: "app-signup",
    templateUrl: "./signup.component.html",
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthenticationService
    ) {}

    ngOnInit() {
        this.initializeForm();
    }

    initializeForm() {
        this.signupForm = this.fb.group({
            firstname: ["", [Validators.required]],
            lastname: ["", [Validators.required]],
            email: ["", [Validators.required, Validators.email]],
            mobile: ["", [Validators.required, Validators.maxLength(10)]],
            password: ["", [Validators.required]],
            confirmPassword: ["", [Validators.required]],
        });
    }

    onSubmit() {
        if (this.signupForm.invalid) {
            return;
        }
    }
}
