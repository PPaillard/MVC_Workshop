const AbstractManager = require("./AbstractManager");

class ArticleManager extends AbstractManager {
  constructor() {
    super({ table: "article" });
  }

  insert(article) {
    return this.connection.query(
      `INSERT INTO ${this.table} (title, content, author)
    VALUES(?,?,?)`,
      [article.title, article.content, article.author]
    );
  }

  update(article) {
    return this.connection.query(
      `UPDATE ${this.table} SET title = ?, content = ?,
    author = ? WHERE id = ? `,
      [article.title, article.content, article.author, article.id]
    );
  }
}

module.exports = ArticleManager;
