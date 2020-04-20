import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { UserState } from "../models/user-state.model";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthenticationService {
    loggedInUrl = "";
    currentUser: Observable<UserState>;
    private currentUserSubject: BehaviorSubject<UserState>;

    constructor(private http: HttpClient) {
        this.loggedInUrl = environment.apiBaseUrl + "/auth/logged";
        this.currentUserSubject = new BehaviorSubject<UserState>(
            JSON.parse(localStorage.getItem("currentUser"))
        );
        this.currentUser = this.currentUserSubject.asObservable();
    }

    getAuthenticatedUser(): UserState {
        return this.currentUserSubject.value;
    }

    logout() {
        localStorage.removeItem("currentUser");
        this.currentUserSubject.next(null);
    }

    isAuthenticated(): Observable<UserState> {
        return this.checkAuthenticated().pipe(
            map((data) => {
                if (data.logged) {
                    localStorage.setItem("currentUser", JSON.stringify(data));
                    this.currentUserSubject.next(data);
                } else {
                    this.currentUserSubject.next(data);
                }
                return data;
            })
        );
    }

    private checkAuthenticated(): Observable<UserState> {
        return this.http.get<UserState>(this.loggedInUrl, {
            withCredentials: true,
        });
    }
}
