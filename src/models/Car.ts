type CarType = 'sedan' | 'suv' | 'van';

class Car {
    id: string;
    type: CarType;

    constructor(id: string, type: CarType) {
        this.id = id;
        this.type = type;
    }
}

export default Car;
