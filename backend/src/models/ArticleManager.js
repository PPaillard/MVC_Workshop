const AbstractManager = require("./AbstractManager");

class ArticleManager extends AbstractManager {
  constructor() {
    super({ table: "article" });
  }

  insert(article) {
    return this.connection.query(
      `INSERT INTO ${this.table} (title, content, user_id)
    VALUES(?,?,?)`,
      [article.title, article.content, article.user_id]
    );
  }

  update(article) {
    return this.connection.query(
      `UPDATE ${this.table} SET title = ?, content = ?,
      user_id = ? WHERE id = ? `,
      [article.title, article.content, article.user_id, article.id]
    );
  }
}

module.exports = ArticleManager;
