class AuthService {
    constructor() {
        this.apiService = apiService; // Usa a instância do ApiService com a baseURL configurada
    }

    async login(mail, password) {
        const response = await this.apiService.fetch('/Auth/SignIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mail, password })
        });
        const profile = new Profile(
            response.profile.id,
            response.profile.firstName,
            response.profile.lastName,
            response.profile.jobTitle,
            response.profile.login,
            response.profile.mail,
            response.profile.phone,
            response.profile.photo,
            response.profile.connectionId,
            response.profile.isActive,
            response.profile.isDeleted,
            response.profile.auth,
            response.profile.memberOf
        );

        const token = new Token(
            response.token.accessToken,
            response.token.expiresIn,
            response.token.tokenType
        );

        return new AuthResponse(profile, token);
    }
}


