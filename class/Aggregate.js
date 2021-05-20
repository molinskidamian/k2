class Aggregate {
    constructor(aggregate) {
        {
            this.producer = aggregate.producer;
            this.model = aggregate.model;
            this.serialNumber = aggregate.serialNumber;
            this.electricalCabinetModel = aggregate.electricalCabinetModel;
            this.electricalCabinetSerialNumber =
                aggregate.electricalCabinetSerialNumber;
        }
        this.aggregatesList = [
            {
                producer: "klu",
                model: "2",
                serialNumber: "12-34das5-6789/2012",
                electricalCabinetModel: "AwqeqwdJUE/24/2015-23m",
                electricalCabinetSerialNumber: "1232112/2015",
            },
            {
                producer: "rapo",
                model: "1.4",
                serialNumber: "12-3sda4das5-67asd89/2012",
                electricalCabinetModel: "AwqeqwdasdJUE/24/2015-23m",
                electricalCabinetSerialNumber: "12asd32112/2015",
            },
        ];
    }

    addAggregate() {
        this.aggregatesList.push(this);
    }

    showAggregatesList() {
        console.log(this.aggregatesList);
    }
}

const aggregat = new Aggregate({
    producer: "klu",
    model: "1.2a",
    serialNumber: "12-345-6789/2012",
    electricalCabinetModel: "AJUE/24/2015-23m",
    electricalCabinetSerialNumber: "12312/2015",
});

aggregat.addAggregate();
