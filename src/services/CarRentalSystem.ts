import Errors from '../constants/Errors';
import Car from '../models/Car';
import Reservation from '../models/Reservation';
import type { CarType } from '../types/CarType';

class CarRentalSystem {
    cars: Car[] = [];
    reservations: Reservation[] = [];

    constructor(initialCarStock: Record<CarType, number>) {
        Object.entries(initialCarStock).forEach(([type, count]) => {
            for (let i = 1; i <= count; i++) {
                this.cars.push(new Car(`${type}-${i}`, type as CarType));
            }
        });
    }

    bookCar(carType: CarType, startDate: Date, days: number): Reservation {
        const endDate = new Date(startDate.getTime() + days * 24 * 60 * 60 * 1000);

        const availableCar = this.cars
            .filter((car) => car.type === carType)
            .find((car) => {
                const carReservations = this.reservations.filter(
                    (reservation) => reservation.carType.id === car.id,
                );

                return !carReservations.some((reservation) =>
                    reservation.conflictsWithOtherDate(startDate, endDate),
                );
            });

        if (!availableCar) {
            throw new Error(Errors.CAR_NOT_AVAILABLE);
        }

        const reservation = new Reservation(availableCar, startDate, days);

        this.reservations.push(reservation);
        return reservation;
    }
}

export default CarRentalSystem;
