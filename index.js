const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres');
const cls = require('continuation-local-storage'),
    namespace = cls.createNamespace('my-very-own-namespace');
Sequelize.useCLS(namespace);
const strictIsolation = {
    isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.SERIALIZABLE
}

const Counter = sequelize.define('counter', { value: { type: Sequelize.INTEGER } });

function createCounterAndReturnId() {
    return Counter.create({ value: 0 }).then(c => c.id)
}

function updateCounter(counterId) {
    return Counter.findByPk(counterId, {lock: Sequelize.Transaction.LOCK.UPDATE})
        .then(counter => counter.update({ value: counter.value + 1 }))
}

function updateCounterInParallel(counterId) {
    let promises = []
    for (let i = 0; i < 20; i++) {
        promises.push(
            sequelize.transaction(strictIsolation, () => updateCounter(counterId))
                .then(() => console.log('----\nTransaction committed successfully\n----'))
                .catch(err => console.error('----\nTransaction rolled back!\n----')))
    }
    return Promise.all(promises).then(() => Counter.findByPk(counterId))
}

sequelize.sync()
    .then(createCounterAndReturnId)
    .then(updateCounterInParallel)
    .then(c => console.log("Last counter value = " + c.value))