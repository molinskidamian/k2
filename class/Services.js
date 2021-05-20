class Services {
    constructor(date) {
        this.date = date;
    }

    showDate() {
        return this.date;
    }
}

const service = new Services(Date());
const content = document.querySelector(".content");
// content.textContent = service.showDate();
