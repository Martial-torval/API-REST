const typeorm = require("typeorm"); // Import typeORM

module.exports = {
  dataSource: new typeorm.DataSource({
    type: "sqlite",
    database: "./wildersdb.sqlite",
    synchronize: true, // true value is Only in dev environnement
    entities: [require("./entity/Wilder"), require("./entity/Skill")],
    logging: ["error"], // Display SQL request in terminal while sending request
  }),
};
