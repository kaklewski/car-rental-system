import CarRentalSystem from './CarRentalSystem';

// Please design and implement a simulated Car Rental system using object-oriented principles.

// Requirements
// • The system should allow reservation of a car of a given type at a desired date and time for a given number of days.
// • There are 3 types of cars (Sedan, SUV and van).
// • The number of cars of each type is limited.
// • Use unit tests to prove the system satisfies the requirements.

const testCars = {
    sedan: 2,
    suv: 1,
    van: 0,
};

const testSystem = new CarRentalSystem(testCars);

testSystem.bookCar('sedan', new Date('2026-01-01'), 3);
testSystem.bookCar('suv', new Date('2026-01-01'), 3);

try {
    testSystem.bookCar('sedan', new Date('2026-01-02'), 3);
    console.log('reservation ok');
} catch (error: any) {
    console.error(error.message);
}
