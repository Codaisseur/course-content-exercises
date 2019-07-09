const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres');

const Flight = sequelize.define('flight', { flightNumber: Sequelize.STRING })
const Passenger = sequelize.define('passenger', { name: Sequelize.STRING })

Flight.hasMany(Passenger)

const myFlightNumber = 'KL-4322'

sequelize.sync()
    .then(createMyFlightIfNotExists)
    .then(addFivePassengers)
    .then(logFlightAndPassengers)
    .catch(err => console.error(err))

function createMyFlightIfNotExists() {
    // Check if flight exists with number 'KL-4322'
    return Flight.findOne({ where: { flightNumber: myFlightNumber } })
        .then(flight => {
            // If it doesn't exists, create it, return the promise.
            if (!flight) {
                return Flight.create({ flightNumber: myFlightNumber })
            }
            // If it does exist, resolve with it.
            return flight
        })

}

function addFivePassengers(flight) {
    // Create five passenger objects
    return Promise.all([
        Passenger.create({ name: 'John 1' }),
        Passenger.create({ name: 'John 2' }),
        Passenger.create({ name: 'John 3' }),
        Passenger.create({ name: 'John 4' }),
        Passenger.create({ name: 'John 5' }),
        // Add them to the flight individually with addPassenger, 
        //  or at the same time with setPassenger
    ]).then(passengers => flight.setPassengers(passengers))
}

function logFlightAndPassengers() {
    // Load flight including(!) associated passengers with one request
    return Flight.findOne({ where: { flightNumber: myFlightNumber }, include: [Passenger] })
        .then(flight => {
            // Log the plain(!) results to the console
            console.log(flight.get({ plain: true }))
        })
}