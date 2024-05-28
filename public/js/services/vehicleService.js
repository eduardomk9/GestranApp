

class VehicleService {
  constructor() {
    this.apiService = apiService;
  }

  async getAllVehicles() {
    const authToken = JSON.parse(localStorage.getItem("authToken"));
    const accessToken = authToken.accessToken;

    const response = await this.apiService.fetch(
      `/Vehicle/GetAllVehicleAsync`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.map((data) => new Vehicle(data));
  }

  async getInspectablesByVehicleId(vehicleId) {
    const authToken = JSON.parse(localStorage.getItem("authToken"));
    const accessToken = authToken.accessToken;

    const response = await this.apiService.fetch(
      `/Vehicle/GetAllInspectableByVehicleIdAsync?model=${vehicleId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.map((data) => new Inspectable(data));
  }
}
