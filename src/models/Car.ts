import type { CarType } from "../types/CarType";

class Car {
    id: string;
    type: CarType;

    constructor(id: string, type: CarType) {
        this.id = id;
        this.type = type;
    }
}

export default Car;
