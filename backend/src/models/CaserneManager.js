const AbstractManager = require("./AbstractManager");

class CaserneManager extends AbstractManager {
  constructor() {
    super({ table: "caserne" });
  }

  insert(caserne) {
    return this.connection.query(
      `INSERT INTO ${this.table} (capacity, longitude, latitude)
    VALUES(?,?,?)`,
      [caserne.capacity, caserne.longitude, caserne.latitude]
    );
  }

  update(caserne) {
    return this.connection.query(
      `UPDATE ${this.table} SET capacity = ?, longitude = ?,
      latitude = ? WHERE id = ? `,
      [caserne.capacity, caserne.longitude, caserne.latitude, caserne.id]
    );
  }
}

module.exports = CaserneManager;
