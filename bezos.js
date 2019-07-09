const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres');


const Company = sequelize.define('company', {name: Sequelize.STRING})
const Employee = sequelize.define('employee', {name: Sequelize.STRING})

Company.hasMany(Employee)

// Sync is required to add the methods to your model instances
sequelize.sync()
  .then(() => {
    return Company.create({name: "Amazon"})
      .then(amazon =>
        Employee.create({name: "Jeff Bezos"})
          .then(jeffBezos => amazon.addEmployee(jeffBezos))
      )
  })
  .then(() => Company.findOne({
    where: {
      name: 'Amazon'
    }, 
    include: [Employee]
  }))
  .then(amazon => {
      console.log(amazon.get({plain: true}))
  })
  .catch(err => console.error(err))
