export class UserProfile {
    constructor(
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public contactNumber?: string,
        public AddressLine1?: string,
        public AddressLine2?: string,
        public AddressLine3?: string,
        public city?: string,
        public country?: string,
        public postCode?: string
    ) {}

    clone(): UserProfile {
        return new UserProfile(
            this.firstName,
            this.lastName,
            this.email,
            this.contactNumber,
            this.AddressLine1,
            this.AddressLine2,
            this.AddressLine3,
            this.city,
            this.country,
            this.postCode
        );
    }
}
