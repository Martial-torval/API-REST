const express = require("express"); // Import express
const typeorm = require("typeorm"); // Import typeORM

const Wilder = require("./entity/Wilder");

const app = express(); // Initialize express

const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true, // true value is Only in dev environnement
  entities: [require("./entity/Wilder")],
});

app.get("/", (req, res) => {
  res.send("hello world");
});

// Start server

const start = async () => {
  await dataSource.initialize();
  dataSource.getRepository(Wilder).save({ name: "Martial Torval" });
  app.listen("3000", () => console.log("Server started on 3000"));
};

start();
