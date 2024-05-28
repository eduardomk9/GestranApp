class Inspection {
    constructor(inspectionData) { 
      this.inspectionId = inspectionData.inspectionId;
      this.vehicleId = inspectionData.vehicleId;
      this.inspectorId = inspectionData.inspectorId;
      this.statusId = inspectionData.statusId;
      this.comment = inspectionData.comment;
      this.startDate = new Date(inspectionData.startDate); 
      this.endDate = inspectionData.endDate ? new Date(inspectionData.endDate) : null;
      this.geInspectionDetails = inspectionData.geInspectionDetails || []; // Handle empty array
  
      // Embedded Objects (Status and Vehicle)
      this.status = new InspectionStatus(inspectionData.status);  
      this.vehicle = new Vehicle(inspectionData.vehicle);
    }
  }
  
  // Sub-Class for Inspection Status
  class InspectionStatus {
    constructor(statusData) {
      this.statusId = statusData.statusId;
      this.description = statusData.description;
      this.geInspections = statusData.geInspections || []; // Handle empty array
    }
  }
  
  // Sub-Class for Vehicle
  class Vehicle {
    constructor(vehicleData) {
      this.vehicleId = vehicleData.vehicleId;
      this.licensePlate = vehicleData.licensePlate;
      this.vehicleTypeId = vehicleData.vehicleTypeId;
      this.name = vehicleData.name;
      this.lastInspection = vehicleData.lastInspection ? new Date(vehicleData.lastInspection) : null;
      this.lastInspectorUserId = vehicleData.lastInspectorUserId;
      this.isBeingInspected = vehicleData.isBeingInspected;
      this.geInspections = vehicleData.geInspections || [];
      this.vehicleType = vehicleData.vehicleType || null; // Assuming vehicleType can be null
    }
  }
  
  