class Car extends Vehicle {
    constructor() {
        super();
    }

    start() {
        return "in Car start " + super.start();
    }
}