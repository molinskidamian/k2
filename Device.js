export class Device {
    constructor(
        producer,
        model,
        serialNumber,
        controlPanel = false,
        controlPanelModel,
        controlPanelSerialNumber
    ) {
        this.producer = producer;
        this.model = model;
        this.serialNumber = serialNumber;
        this.controlPanel = controlPanel;
        this.controlPanelModel = this.controlPanelModel;
        this.controlPanelSerialNumber = this.controlPanelSerialNumber;
    }
}
