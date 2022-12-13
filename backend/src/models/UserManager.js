const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  find(id) {
    return this.connection.query(
      `select id, firstname, lastname, email, city, language from  ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.connection.query(
      `select id, firstname, lastname, email, city, language from  ${this.table}`
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, email, city, language, hashedPassword) values (?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.city,
        user.language,
        user.hashedPassword,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [user.title, user.id]
    );
  }
}

module.exports = ItemManager;
