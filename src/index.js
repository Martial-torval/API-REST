const express = require("express"); // Import express
const { dataSource } = require("./utils");
const wilderController = require("./controller/wilder");
const skillController = require("./controller/skillController");

const app = express(); // Initialize express

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// Wilder's Routes

app.post("/api/wilder", wilderController.create);
app.get("/api/wilder", wilderController.read);
app.put("/api/wilder/:id", wilderController.update);
app.delete("/api/wilder/:id", wilderController.delete);

app.post("/api/skill", skillController.create);
app.get("/api/skill", skillController.read);
app.put("/api/skill/:id", skillController.update);
app.delete("/api/skill/:id", skillController.delete);

// http://localhost:3000/api/wilder/123/skill/123/add
app.post(
  "/api/wilder/:wilderId/skill/:skillId/add",
  wilderController.addWilderSkill
);

// Start server

const start = async () => {
  await dataSource.initialize();
  app.listen("3000", () => console.log("Server started on 3000"));
};

start();
