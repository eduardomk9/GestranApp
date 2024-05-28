// Main Class for Vehicle
class Vehicle {
    constructor(vehicleData) {
      this.vehicleId = vehicleData.vehicleId;
      this.licensePlate = vehicleData.licensePlate;
      this.vehicleTypeId = vehicleData.vehicleTypeId;
      this.name = vehicleData.name;
      this.lastInspection = vehicleData.lastInspection ? new Date(vehicleData.lastInspection) : null;
      this.lastInspectorUserId = vehicleData.lastInspectorUserId;
      this.isBeingInspected = vehicleData.isBeingInspected;
      this.geInspections = vehicleData.geInspections ? vehicleData.geInspections.map(inspection => new GeInspection(inspection)) : [];
      this.vehicleType = vehicleData.vehicleType ? new GeVehicleType(vehicleData.vehicleType) : null;
    }
  }
  
  // Sub-Class for GeInspection
  class GeInspection {
    constructor(inspectionData) {
      this.inspectionId = inspectionData.inspectionId;
      this.vehicleId = inspectionData.vehicleId;
      this.inspectorId = inspectionData.inspectorId;
      this.statusId = inspectionData.statusId;
      this.comment = inspectionData.comment;
      this.startDate = new Date(inspectionData.startDate);
      this.endDate = inspectionData.endDate ? new Date(inspectionData.endDate) : null;
      this.geInspectionDetails = inspectionData.geInspectionDetails || [];
    }
  }
  
  // Sub-Class for GeVehicleType
  class GeVehicleType {
    constructor(vehicleTypeData) {
      this.vehicleTypeId = vehicleTypeData.vehicleTypeId;
      this.description = vehicleTypeData.description;
      this.geVehicles = vehicleTypeData.geVehicles || [];
    }
  }
  