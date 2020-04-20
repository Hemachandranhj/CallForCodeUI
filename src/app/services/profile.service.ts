import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { UserProfile } from "../models/user-profile.model";

@Injectable()
export class ProfileService {
    ProfileServiceUrl = "";

    constructor(private http: HttpClient) {
        this.ProfileServiceUrl = environment.apiBaseUrl + "/profile/";
    }

    getProfile(email: string): Observable<UserProfile> {
        let userProfile = { email: email };

        return this.http.get<UserProfile>(this.ProfileServiceUrl, {
            params: userProfile,
        });
    }

    submitProfile(userProfile: UserProfile) {
        return this.http.post(this.ProfileServiceUrl, userProfile);
    }
}
