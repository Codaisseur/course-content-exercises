const User = require("./models").user;
const TodoItem = require("./models").todoItem;

async function getUsers() {
  const allUsers = await User.findAll();
  return allUsers.map(user => user.get({ plain: true }));
}

// getUsers().then((users) => console.log(users));

async function getTodoItems() {
  const allTodoItems = await TodoItem.findAll();
  return allTodoItems.map(item => item.get({ plain: true }));
}

// getTodoItems().then((result) => console.log(result));

async function getUserByPk(key) {
  const user = await User.findByPk(key);
  return user ? user.get({ plain: true }) : "Not found!";
}

// getUserByPk(2).then((result) => console.log(result));

async function newUser({ name, email, phone }) {
  const newUser = await User.create({ name, email, phone });
  return newUser.get({ plain: true });
}

// newUser({ name: "elma", email: "elma@m.com", phone: 342342 }).then((result) =>
//   console.log(result)
// );

async function importantTodos() {
  const todos = await TodoItem.findAll({ where: { important: true } });
  return todos.map(todo => todo.get({ plain: true }));
}

importantTodos().then(result => console.log(result));
