import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, of } from "rxjs";
import { UserProfile } from "../models/user-profile.model";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class ProfileService {
    ProfileServiceUrl = "";

    constructor(private http: HttpClient) {
        this.ProfileServiceUrl = environment.apiBaseUrl + "/profile/";
    }

    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:4200",
        }),
    };

    getProfile(email: string): Observable<UserProfile> {
        let userProfile = { email: email };

      return this.http
            .get(this.ProfileServiceUrl, { params: userProfile })
            .pipe(map((response) => {
                return this.mapUserProfileResponse(response);
            }));
    }

    post(userProfile: UserProfile): Observable<any> {
        var body = JSON.stringify(userProfile);
        return this.http
            .post(this.ProfileServiceUrl, body, this.httpOptions)
            .pipe(
                map((response: any) => {
                    return "Profile submitted successfully";
                }),
                catchError((error: any): any => {
                    throw error.error;
                })
            );
    }

    put(userProfile: UserProfile): Observable<any> {
        var body = JSON.stringify(userProfile);
        return this.http
            .put(this.ProfileServiceUrl, body, this.httpOptions)
            .pipe(
                map((response: any) => {
                    return "Profile updated successfully";
                }),
                catchError((error: any): any => {
                    throw error.error;
                })
            );
    }

    private mapUserProfileResponse(response: any): UserProfile {
        let userProfile = new UserProfile();

        if (response && response.result && response.result.length > 0) {
            userProfile.firstName = response.result[0].firstName;
            userProfile.lastName = response.result[0].lastName;
            userProfile.email = response.result[0].email;
            userProfile.AddressLine1 = response.result[0].AddressLine1;
            userProfile.AddressLine2 = response.result[0].AddressLine2;
            userProfile.AddressLine3 = response.result[0].AddressLine3;
            userProfile.city = response.result[0].city;
            userProfile.country = response.result[0].country;
            userProfile.contactNumber = response.result[0].contactNumber;
        }
        return userProfile;
    }
}
