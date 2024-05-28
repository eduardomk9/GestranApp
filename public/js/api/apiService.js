class ApiService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async fetch(endpoint, options = {}) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, options);
            if (response.status === 412) {
                const errorData = await response.json(); // Se o backend retornar dados de erro no corpo da resposta
                throw new Error(errorData.message);
            }
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

const apiService = new ApiService('https://localhost:7076');
