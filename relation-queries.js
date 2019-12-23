const { User, TodoItem, TodoList } = require("./models");

async function listsWithUsers() {
  const lists = await TodoList.findAll({
    include: [{ model: User, attributes: ["name"] }]
  });
  return lists.map(list => list.get({ plain: true }));
}

async function getUsers() {
  const allUsers = await User.findAll({
    include: { model: TodoList, attributes: ["name"] }
  });
  return allUsers.map(user => user.get({ plain: true }));
}

async function getImportantItems() {
  const items = await TodoItem.findAll({
    where: { important: true },
    include: { model: TodoList, attributes: ["name"] }
  });
  return items.map(item => item.get({ plain: true }));
}

getImportantItems().then(item => console.log(item));

async function getTasksForUser(pk) {
  const user = await User.findByPk(pk, {
    include: {
      model: TodoList,
      attributes: ["name"],
      include: { model: TodoItem, attributes: ["task"] }
    }
  });

  return user.get({ plain: true });
}

getTasksForUser(3).then(user => console.log(user));
