const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  find(id) {
    return this.connection.query(
      `select id, firstname, lastname, email, city, language, avatar from  ${this.table} where id = ?`,
      [id]
    );
  }

  findByEmailWithPassword(email) {
    return this.connection.query(
      `select * from  ${this.table} where email = ?`,
      [email]
    );
  }

  findAll() {
    return this.connection.query(`select * from ${this.table}`);
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, email, status, user_password) values (?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.status,
        user.hashedPassword,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, status = ?, hashedPassword = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.status,
        user.hashedPassword,
        user.id,
      ]
    );
  }

  updateAvatar(id, avatar) {
    return this.connection.query(
      `update ${this.table} set avatar = ? where id = ?`,
      [avatar, id]
    );
  }
}

module.exports = UserManager;
