const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `INSERT INTO ${this.table} (title, content, author)
    VALUES(?,?,?)`,
      [user.title, user.content, user.author]
    );
  }

  update(user) {
    return this.connection.query(
      `UPDATE ${this.table} SET title = ?, content = ?,
    author = ? WHERE id = ? `,
      [user.title, user.content, user.author, user.id]
    );
  }
}

module.exports = UserManager;
