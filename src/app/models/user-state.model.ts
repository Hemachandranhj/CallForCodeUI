export interface UserState {
    logged: boolean;
    loggedInAs: {
        name: string;
        email: string;
        accessToken: string;
    };
}
