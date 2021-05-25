export class Device {
    constructor(
        producer,
        model,
        serialNumber,
        isSelected,
        controlPanelModel,
        controlPanelSerialNumber
    ) {
        this.producer = producer;
        this.model = model;
        this.serialNumber = serialNumber;
        this.isSelected = isSelected;

        this.controlPanelModel = controlPanelModel;
        this.controlPanelSerialNumber = controlPanelSerialNumber;
    }

    checkfield(...field) {
        if (this.isSelected != 0) {
            console.log("Do check additionall fields");

            const additionallyFields =
                document.querySelectorAll("[data-option]");

            additionallyFields.forEach((el) => {
                if (el.value === "") {
                    console.log("Uzupełnij wymagane pola");
                    el.style.border = "1px solid red";
                    // el.style.color = "red";
                    const alertsField = document.querySelector(".alert-danger");
                    alertsField.classList.remove("result-alerts");
                    const li = document.createElement("li");
                    li.innerHTML = el.dataset.errormessage;
                    alertsField.appendChild(li);
                }
            });
            console.dir(additionallyFields);
        }
    }
}
