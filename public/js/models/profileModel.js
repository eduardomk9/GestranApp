class Profile {
    constructor(id, firstName, lastName, jobTitle, login, mail, phone, photo, connectionId, isActive, isDeleted, auth, memberOf) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.login = login;
        this.mail = mail;
        this.phone = phone;
        this.photo = photo;
        this.connectionId = connectionId;
        this.isActive = isActive;
        this.isDeleted = isDeleted;
        this.auth = auth;
        this.memberOf = memberOf;
    }
}

class Token {
    constructor(accessToken, expiresIn, tokenType) {
        this.accessToken = accessToken;
        this.expiresIn = expiresIn;
        this.tokenType = tokenType;
    }
}

class AuthResponse {
    constructor(profile, token) {
        this.profile = profile;
        this.token = token;
    }
}
