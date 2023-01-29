class Cars {
    constructor(brand, model, color, year) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
    }
}

class Mini extends Cars {
    constructor(brand, model, color, year, othername = "", bodyStyle = "") {
        super(brand, model, color, year);
        this.otherName = othername;
        this.bodyStyle = bodyStyle;
    }

}

class Pontiac extends Cars {
    constructor(brand, model, color, year, layout, platform) {
        super(brand, model, color, year);
        this.layout = layout;
        this.platform = platform;
    }
}

document.querySelector("#pontiac").addEventListener("click", function () {
    const pont = new Pontiac("Pontiac", "Streamliner", "Green", 1941, "FR layout", "B-body");
    document.querySelector("#carbrand").innerText = "Brand: " + pont.brand;
    document.querySelector("#carmodel").innerText = "Model: " + pont.model;
    document.querySelector("#caryear").innerText = "Year: " + pont.year;
    document.querySelector("#other1").innerText = `Layout: ${pont.layout}`;
    document.querySelector("#other2").innerText = `Platform: ${pont.platform}`;
})


document.querySelector("#minicooper").addEventListener("click", function () {
    const mini = new Mini("Austin Cooper", "Mark I", "yellow", 1959, "Austin 850", "2-door");
    document.querySelector("#carbrand").innerText = "Brand: " + mini.brand;
    document.querySelector("#carmodel").innerText = "Model: " + mini.model;
    document.querySelector("#caryear").innerText = "Year: " + mini.year;
    document.querySelector("#other1").innerText = `Other Name: ${mini.otherName}`;
    document.querySelector("#other2").innerText = `Body Style: ${mini.bodyStyle}`;
})