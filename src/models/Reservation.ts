import Errors from '../constants/Errors';
import type Car from './Car';

class Reservation {
    carType: Car;
    startDate: Date;
    days: number;
    endDate: Date;

    constructor(carType: Car, startDate: Date, days: number) {
        if (days < 1) {
            throw new Error(Errors.INVALID_RESERVATION_DAYS);
        }

        this.carType = carType;
        this.startDate = startDate;
        this.days = days;

        this.endDate = new Date(startDate.getTime() + days * 24 * 60 * 60 * 1000);
    }

    conflictsWithOtherDate(otherDateStart: Date, otherDateEnd: Date): boolean {
        return this.startDate < otherDateEnd && this.endDate > otherDateStart;
    }
}

export default Reservation;
