import Car from "./Car.js";

class Electric extends Car {
    constructor(name, wheelsType, color, maxSpeed, type, seatCount, currentCapacity) {
        super(name, wheelsType, color, maxSpeed, type, seatCount);
        this.currentCapacity = currentCapacity;
    }

    getCurrentCapacity() {
        if (this.type == "Electric") {
            // return this.currentCapacity;
            console.log("This is Electric")
        } else {
            console.log("Not a Electric");
        }

    }
}

export default Electric;
