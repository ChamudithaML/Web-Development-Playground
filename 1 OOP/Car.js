class Car {
    constructor(name, wheelsType, color, maxSpeed, type, seatCount) {
        this.name = name;
        this.wheelsType = wheelsType;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.type = type;
        this.seatCount = seatCount;
    }

    // changeName = function (newName) {
    //     this.name = newName;
    // }

    changeColor(newColor) {
        this.color = newColor;
    }

    changeSeatCount(type, newSeatCount) {
        if (type = "SUV") {
            this.seatCount = newSeatCount;
        } else {
            console.log("Can't change seat count for this vehicle type");
        }
    }
}


export default Car;