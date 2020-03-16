## Sequelize Day 3 starter kit

To make use of this starter kit you have to clone this repo. Then, delete all other folder but `/week-5/day3-starter-kit/`. Make sure a PostgresSQL instance is running, probably in a docker container. Then:

- `cd` into this folder.
- `npm install`

```
$ npx sequelize-cli db:create
$ npx sequelize-cli db:migrate
$ npx sequelize-cli db:seed:all
```
