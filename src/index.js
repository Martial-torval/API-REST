const express = require("express"); // Import express
const dataSource = require("./utils").dataSource;
const wilderController = require("./controller/wilder");

const app = express(); // Initialize express

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// Routes

app.post("/api/wilder", wilderController.create);
app.get("/api/wilder", wilderController.read);
app.put("/api/wilder/:id", wilderController.update);
app.delete("/api/wilder/:id", wilderController.delete);

// Start server

const start = async () => {
  await dataSource.initialize();
  app.listen("3000", () => console.log("Server started on 3000"));
};

start();
