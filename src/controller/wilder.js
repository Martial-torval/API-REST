const dataSource = require("../utils").dataSource;
const WilderEntity = require("../entity/Wilder");

module.exports = {
  //Methode Create
  create: async (req, res) => {
    try {
      const newWilder = await dataSource
        .getRepository(WilderEntity)
        .save(req.body);
      res.send("Created Wilder");
    } catch (error) {
      res.send("Error while creating a wilder");
    }
  },
  // Methode read
  read: async (req, res) => {
    try {
      const wilderTable = await dataSource
        .getRepository(WilderEntity)
        .query("SELECT * FROM wilder");
      res.send(wilderTable);
    } catch {
      res.send("Error while displaying Wilder's table");
    }
  },
  // Methode Update
  update: async (req, res) => {
    try {
      const updatedWilder = await dataSource
        .getRepository(WilderEntity)
        .update(req.params.id, req.body);
      res.send("Wilder Updated");
    } catch {
      res.send("Error while updating a Wilder");
    }
  },
  delete: async (req, res) => {
    try {
      const deletedWilder = dataSource
        .getRepository(WilderEntity)
        .delete(req.params.id);
      res.send("Wilder Deleted");
    } catch {
      res.send("Error while deleting a Wilder");
    }
  },
};
