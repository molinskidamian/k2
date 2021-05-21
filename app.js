import { Device } from "./Device.js";

const addDeviceForm = document.querySelector("#addDeviceForm");
const addBtn = document.querySelector(".btn");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const producer = addDeviceForm.querySelector(
        'input[name="device-producer"]'
    );
    const model = addDeviceForm.querySelector('input[name="device-model"]');
    const serialNumber = addDeviceForm.querySelector(
        'input[name="device-serialNumber"]'
    );
    const controlPanelModel = addDeviceForm.querySelector(
        'input[name="controlPanelModel"]'
    );

    const controlPanelSerialNumber = addDeviceForm.querySelector(
        'input[name="controlPanelSerialNumber"]'
    );

    console.log(producer.value);
    console.log(model.value);

    console.log("Formularz wysłano!");
});
