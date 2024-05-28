class InspectionDTO {
    constructor(vehicleId, inspectorId, comment = '', statusId = 1) {
      this.vehicleId = vehicleId;
      this.inspectorId = inspectorId;
      this.comment = comment;
      this.statusId = statusId;
    }
  }
  