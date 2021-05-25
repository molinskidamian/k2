import { Device } from "./Device.js";

const addDeviceForm = document.querySelector("#addDeviceForm");
const addBtn = document.querySelector(".btn");
const alertDanger = document.querySelector(".result-alerts");
const select = document.querySelector("select");
const controlPanel = document.querySelectorAll(".control-panel");
const controlPanelArray = [...controlPanel];

select.addEventListener("change", (e) => {
    if (e.target.value == 0) {
        controlPanel.forEach((el) => {
            el.classList.remove("show-field");
        });
    } else if (e.target.value == 1) {
        controlPanel.forEach((el) => {
            el.classList.add("show-field");
        });
    }
});

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const producer = addDeviceForm.querySelector(
        'input[name="device-producer"]'
    );
    const model = addDeviceForm.querySelector('input[name="device-model"]');

    const serialNumber = addDeviceForm.querySelector(
        'input[name="device-serialNumber"]'
    );

    const select = addDeviceForm.querySelector("select");
    const isSelected = select.options[select.selectedIndex].value;
    console.log(isSelected);

    const controlPanelModel = addDeviceForm.querySelector(
        'input[name="device-cp-model"]'
    );

    const controlPanelSerialNumber = addDeviceForm.querySelector(
        'input[name="device-cp-serial-number"]'
    );

    debugger;

    /* unit test */
    console.log(producer.value);
    console.log(model.value);
    console.log(serialNumber.value);
    console.log(controlPanelModel.value);
    console.log(controlPanelSerialNumber.value);

    const device = new Device(
        producer,
        model,
        serialNumber,
        isSelected,
        controlPanelModel,
        controlPanelSerialNumber
    );

    device.checkfield(controlPanelModel, controlPanelSerialNumber);
    debugger;
    console.log("Formularz wysłano!");
});
