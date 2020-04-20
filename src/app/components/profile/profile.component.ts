import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProfileService } from "src/app/services/profile.service";
import { first, map } from "rxjs/operators";
import { UserProfile } from "src/app/models/user-profile.model";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit {
    profileForm: FormGroup;
    submitted = false;
    userProfile: UserProfile = new UserProfile();

    constructor(
        private fb: FormBuilder,
        private profileService: ProfileService,
        private authService: AuthenticationService,
        private router: Router
    ) {}

    ngOnInit() {
        this.initializeForm();
        this.subscribeForValueChanges();

        this.authService.isAuthenticated().pipe(
            map((user) => {
                if (user && user.logged) {
                    this.populateProfile(user.loggedInAs.email);
                }
            })
        );
    }

    // convenience getter for easy access to form fields
    get profile() {
        return this.profileForm.controls;
    }

    initializeForm() {
        this.profileForm = this.fb.group({
            firstName: ["", [Validators.required]],
            lastName: ["", [Validators.required]],
            email: ["", [Validators.required]],
            contactNumber: ["", [Validators.required]],
            addressLine1: ["", [Validators.required]],
            addressLine2: ["", [Validators.required]],
            addressLine3: ["", [Validators.required]],
            city: ["", [Validators.required]],
            country: ["", [Validators.required]],
            postCode: ["", [Validators.required]],
        });
    }

    get firstNameControl() {
        return this.profileForm.controls["firstName"];
    }
    get lastNameControl() {
        return this.profileForm.controls["lastName"];
    }
    get emailControl() {
        return this.profileForm.controls["email"];
    }
    get contactNumberControl() {
        return this.profileForm.controls["contactNumber"];
    }
    get addressLine1Control() {
        return this.profileForm.controls["addressLine1"];
    }
    get addressLine2Control() {
        return this.profileForm.controls["addressLine2"];
    }
    get addressLine3Control() {
        return this.profileForm.controls["addressLine3"];
    }
    get cityControl() {
        return this.profileForm.controls["city"];
    }
    get countryControl() {
        return this.profileForm.controls["country"];
    }
    get postCodeControl() {
        return this.profileForm.controls["postCode"];
    }

    onSubmit() {
        this.submitted = true;

        if (this.profileForm.invalid) {
            return;
        } else {
            const profileRequest = this.userProfile;

            this.profileService
                .submitProfile(profileRequest)
                .pipe(first())
                .subscribe(
                    (data) => {
                        //this.alertService.success('Registration successful', true);
                        this.router.navigate(["/dashboard"]);
                    },
                    (error) => {
                        console.log("Error submitting profile " + error);
                        // this.alertService.error(error);
                        // this.loading = false;
                    }
                );
        }
    }

    private populateProfile(email: string) {
        const userProfile$ = this.profileService.getProfile(email);

        const profileDetail$ = userProfile$.pipe(
            map((profile) => {
                this.firstNameControl.setValue(profile.firstName);
                this.lastNameControl.setValue(profile.lastName);
                this.emailControl.setValue(profile.email);
                this.contactNumberControl.setValue(profile.contactNumber);
                this.addressLine1Control.setValue(profile.AddressLine1);
                this.addressLine2Control.setValue(profile.AddressLine2);
                this.addressLine3Control.setValue(profile.AddressLine3);
                this.cityControl.setValue(profile.city);
                this.countryControl.setValue(profile.country);
                this.postCodeControl.setValue(profile.postCode);
                return profile;
            })
        );
    }

    private subscribeForValueChanges() {
        this.firstNameControl.valueChanges.subscribe(
            (x) => (this.userProfile.firstName = x)
        );
        this.lastNameControl.valueChanges.subscribe(
            (x) => (this.userProfile.lastName = x)
        );
        this.emailControl.valueChanges.subscribe(
            (x) => (this.userProfile.email = x)
        );
        this.contactNumberControl.valueChanges.subscribe(
            (x) => (this.userProfile.contactNumber = x)
        );
        this.addressLine1Control.valueChanges.subscribe(
            (x) => (this.userProfile.AddressLine1 = x)
        );
        this.addressLine2Control.valueChanges.subscribe(
            (x) => (this.userProfile.AddressLine2 = x)
        );
        this.addressLine3Control.valueChanges.subscribe(
            (x) => (this.userProfile.AddressLine3 = x)
        );
        this.cityControl.valueChanges.subscribe(
            (x) => (this.userProfile.city = x)
        );
        this.countryControl.valueChanges.subscribe(
            (x) => (this.userProfile.country = x)
        );
        this.postCodeControl.valueChanges.subscribe(
            (x) => (this.userProfile.postCode = x)
        );
    }
}
