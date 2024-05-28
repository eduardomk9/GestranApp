class inspectionService {
  constructor() {
    this.apiService = apiService;
  }


  async getInspections(userId) {
    const authToken = JSON.parse(localStorage.getItem("authToken"));
    const accessToken = authToken.accessToken;

    const response = await this.apiService.fetch(
      `/Inspection/GetInspectionByUserIdAsync?model=${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.map((data) => new Inspection(data));
  }

  async saveInspection(inspectionDTO) {
    const authToken = JSON.parse(localStorage.getItem("authToken"));
    const accessToken = authToken.accessToken;

    console.log("inspectionDTO:", inspectionDTO); // Verificar se inspectionDTO está sendo passado corretamente

    const response = await this.apiService.fetch(
      `/Inspection/CreateInspectionAsync`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(inspectionDTO),
      } 
    );
    return response;
  }

  async saveInspectionDetails(model) {
    const authToken = JSON.parse(localStorage.getItem("authToken"));
    const accessToken = authToken.accessToken;

    console.log("details:", model); // Verificar se inspectionDTO está sendo passado corretamente

    const response = await this.apiService.fetch(
      `/Inspection/CreateInspectionDetailAsync`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(model),
      } 
    );
    return response;
  }
}
