async function renderInspectionsTable() {
  try {
    console.log("Rendering inspections table...");
    const inspectorService = new inspectionService();
    const inspectorContent = document.getElementById("inspetor-content");

    // Limpar a tabela antiga, mantendo o botão "Adicionar Inspeção"
    const addButtonHtml = document.getElementById("addInspectionBtn").outerHTML;
    inspectorContent.innerHTML = addButtonHtml;

    const inspections = await inspectorService.getInspections(7);

    let tableHtml = `
        <table id="inspInspectionsTable" class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Vehicle</th>
              <th>Status</th>
              <th>License Plate</th>
              <th>Comment</th>
              <th>Start Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
      `;

    inspections.forEach((inspection) => {
      tableHtml += `
          <tr>
            <td>${inspection.inspectionId}</td>
            <td>${inspection.vehicle.name}</td>
            <td>${inspection.status.description}</td>
            <td>${inspection.vehicle.licensePlate}</td>
            <td>${inspection.comment}</td>
            <td>${new Date(inspection.startDate).toLocaleString()}</td>
            <td>
            <button class="btn btn-success btn-sm me-1" onclick='openAddDetailModal(${JSON.stringify(inspection)})'><i class="bi bi-plus"></i></button>
            <button class="btn btn-danger btn-sm"><i class="bi bi-x"></i></button>
            </td>
          </tr>
        `;
    });

    tableHtml += `</tbody></table>`;

    // Adicionando a tabela ao conteúdo
    inspectorContent.innerHTML += tableHtml;

    // Readição do botão "Adicionar Inspeção"
    addAddInspectionButtonClickEvent();
  } catch (error) {
    console.error("Error fetching inspections:", error);
  }
}

async function openAddDetailModal(inspection) {
  try {
    console.log(inspection);
    //const inspection = JSON.parse(inspectionJson);
    const vehicleService = new VehicleService();
    const inspectables = await vehicleService.getInspectablesByVehicleId(inspection.vehicle.vehicleId);

    const existingModal = document.getElementById('addDetailModal');
    if (existingModal) {
      existingModal.remove();
    }

    let modalHtml = `
      <div class="modal fade" id="addDetailModal" tabindex="-1" aria-labelledby="addDetailModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addDetailModalLabel">Adicionar Detalhes da Inspeção</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="addDetailForm">
    `;

    inspectables.forEach((inspectable) => {
      modalHtml += `
        <div class="mb-3">
          <label for="inspectable_${inspectable.inspectableId}" class="form-label">${inspectable.name}</label>
          <select class="form-select mb-2" id="result_${inspectable.inspectableId}" name="result_${inspectable.inspectableId}">
            <option value="Bom">Bom</option>
            <option value="Ruim">Ruim</option>
            <option value="Otimo">Ótimo</option>
            <option value="Avariado">Avariado</option>
          </select>
          <textarea class="form-control" id="observation_${inspectable.inspectableId}" name="observation_${inspectable.inspectableId}" rows="2" placeholder="Comentário"></textarea>
        </div>
      `;
    });

    modalHtml += `
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              <button type="button" class="btn btn-primary" onclick="saveDetails(${inspection.inspectionId})">Salvar</button>
            </div>
          </div>
        </div>
      </div>
    `;


    document.body.insertAdjacentHTML('beforeend', modalHtml);

    const modal = new bootstrap.Modal(document.getElementById('addDetailModal'));
    modal.show();
  } catch (error) {
    console.error("Error fetching inspectables:", error);
  }
}

async function saveDetails(inspectionId) {
  try {
    const form = document.getElementById("addDetailForm");
    const formData = new FormData(form);
    let details = [];
    for (let [key, value] of formData.entries()) {
      const [field, id] = key.split('_');
      let detail = details.find(d => d.inspectableId == id);
      if (!detail) {
        detail = { inspectableId: Number(id), inspectionId : Number(inspectionId),result: '', observation: '' };
        details.push(detail);
      }
      detail[field] = value;
    }

    const inspectorService = new inspectionService();
    console.log(inspectionId, details)
    await inspectorService.saveInspectionDetails(details);

    const modal = bootstrap.Modal.getInstance(document.getElementById('addDetailModal'));
    modal.hide();
    document.getElementById('addDetailModal').remove();

    const toastElement = document.getElementById('successToast');
    const toast = new bootstrap.Toast(toastElement);
    toast.show();

    await renderInspectionsTable();
  } catch (error) {
    console.error("Error saving inspection details:", error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const storedProfile = JSON.parse(localStorage.getItem("profile"));

  console.log("Stored Profile:", storedProfile);

  if (storedProfile) {
    const jobTitle = storedProfile.jobTitle.toLowerCase();
    console.log("Job Title:", jobTitle);

    const contentMap = {
      inspector: "inspetor-content",
      supervisor: "supervisor-content",
    };

    const contentId = contentMap[jobTitle] || "page-404";
    console.log("Content ID:", contentId);

    document.getElementById(contentId).classList.remove("d-none");

    for (const key in contentMap) {
      if (key !== jobTitle) {
        document.getElementById(contentMap[key]).classList.add("d-none");
      }
    }

    // Escondendo 404 se o jobTitle for válido
    if (jobTitle in contentMap) {
      document.getElementById("page-404").classList.add("d-none");
    }

    if (jobTitle === "inspector") {
      const inspectorContent = document.getElementById("inspetor-content");

      // Adicionar botão antes do datatable
      let buttonHtml = `
        <button id="addInspectionBtn" class="btn btn-primary mb-3">
          <i class="bi bi-plus"></i> Adicionar Inspeção
        </button>
      `;

      inspectorContent.innerHTML = buttonHtml;

      try {
        await renderInspectionsTable();
      } catch (error) {
        console.error("Error fetching inspections:", error);
      }
    }
  } else {
    window.location.href = "index.html";
  }
});

// Função para adicionar evento de clique do botão de nova inspeção
function addAddInspectionButtonClickEvent() {
  console.log("Adding click event for Add Inspection button...");
  const addButton = document.getElementById("addInspectionBtn");

  // Remover eventos de clique anteriores para evitar múltiplas ligações
  const newButton = addButton.cloneNode(true);
  addButton.parentNode.replaceChild(newButton, addButton);

  newButton.addEventListener("click", async () => {
    console.log("Add Inspection button clicked...");
    const extraFieldsContainer = document.getElementById("extraFieldsContainer");
    if (extraFieldsContainer) {
      extraFieldsContainer.innerHTML = ""; // Limpar campos extras
    }

    try {
      const vehicleService = new VehicleService();

      // Preencher inspectorId
      const storedProfile = JSON.parse(localStorage.getItem("profile"));
      document.getElementById("inspectorId").value = storedProfile.id;

      // Carregar veículos no select de vehicleId
      const vehicleSelect = document.getElementById("vehicleId");
      vehicleSelect.innerHTML = ""; // Limpar opções anteriores
      const vehicles = await vehicleService.getAllVehicles();
      vehicles.forEach((vehicle) => {
        const option = document.createElement("option");
        option.value = vehicle.vehicleId;
        option.text = vehicle.name;
        vehicleSelect.appendChild(option);
      });
      
      // Abrir o modal
      const modal = new bootstrap.Modal(
        document.getElementById("addInspectionModal")
      );
      modal.show();
    } catch (error) {
      console.error("Error preparing modal:", error);
    }

    document
      .getElementById("addInspectionForm")
      .addEventListener("submit", async (event) => {
        event.preventDefault(); // Evitar o envio do formulário padrão

        try {
          const inspectorService = new inspectionService();
          const form = event.target;
          const inspectionDTO = new InspectionDTO(
            form.elements.vehicleId.value,
            form.elements.inspectorId.value,
            form.elements.comment.value
          );

          console.log(inspectionDTO);
          // Chamar a função saveInspection
          const response = await inspectorService.saveInspection(
            inspectionDTO
          );

          if (response !== undefined && response !== null) {
            // Se a resposta for verdadeira, esconder o modal
            const modal = bootstrap.Modal.getInstance(
              document.getElementById("addInspectionModal")
            );
            modal.hide();
            await renderInspectionsTable();
          }
        } catch (error) {
          const errorMessageElement = document.getElementById("errorMessage");
          errorMessageElement.textContent = error.message;
          errorMessageElement.classList.remove("d-none");
        }
      });
  });
}
