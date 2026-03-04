import { describe, expect, it } from 'vitest';
import CarRentalSystem from './CarRentalSystem';

describe('CarRentalSystem', () => {
    it('should allow booking a car if available', () => {
        const testCars = {
            sedan: 2,
            suv: 1,
            van: 3,
        };
        const testSystem = new CarRentalSystem(testCars);
        const reservation = testSystem.bookCar('sedan', new Date('2026-01-01'), 5);

        expect(reservation).toBeDefined();
        expect(reservation.carType.type).toBe('sedan');
        expect(reservation.startDate).toEqual(new Date('2026-01-01'));
        expect(reservation.days).toBe(5);
    });

    it('should allow booking a car if the date is not conflicting', () => {
        const testCars = {
            sedan: 1,
            suv: 1,
            van: 0,
        };

        const testSystem = new CarRentalSystem(testCars);
        testSystem.bookCar('sedan', new Date('2026-01-01'), 3);
        const reservation = testSystem.bookCar('sedan', new Date('2026-01-08'), 3);

        expect(reservation).toBeDefined();
    });

    it('should throw an error if a car is not available', () => {
        const testCars = {
            sedan: 0,
            suv: 1,
            van: 0,
        };

        const testSystem = new CarRentalSystem(testCars);

        expect(() => testSystem.bookCar('sedan', new Date('2026-01-01'), 5)).toThrow();
    });

    it('should throw an error if a car is already booked for the selected dates', () => {
        const testCars = {
            sedan: 1,
            suv: 1,
            van: 0,
        };

        const testSystem = new CarRentalSystem(testCars);
        testSystem.bookCar('sedan', new Date('2026-01-01'), 5);

        expect(() => testSystem.bookCar('sedan', new Date('2026-01-03'), 3)).toThrow();
    });
});
