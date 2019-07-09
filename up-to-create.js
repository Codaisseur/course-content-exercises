const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres');

const Message = sequelize.define('message', { body: { type: Sequelize.TEXT }, line_count: { type: Sequelize.INTEGER } });

sequelize.sync()
    .then(() => Message.create({ body: `This message was created at ${new Date()}`, line_count: 1 }))
    .then(() => Message.findAll())
    .then(messages => console.log("All messages: ", messages.map(m => m.dataValues)))
    .catch(err => console.error(err))