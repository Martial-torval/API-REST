const dataSource = require("../utils").dataSource;
const skillEntity = require("../entity/Skill");

module.exports = {
  //Methode Create
  create: async (req, res) => {
    try {
      const newSkill = await dataSource
        .getRepository(skillEntity)
        .save(req.body);
      res.send("Created skill");
    } catch (error) {
      res.send("Error while creating a skill");
      console.log(error);
    }
  },
  // Methode read
  read: async (req, res) => {
    try {
      const skillTable = await dataSource
        .getRepository(skillEntity)
        .query("SELECT * FROM skill");
      res.send(skillTable);
    } catch {
      res.send("Error while displaying skill's table");
    }
  },
  // Methode Update
  update: async (req, res) => {
    try {
      const updatedskill = await dataSource
        .getRepository(skillEntity)
        .update(req.params.id, req.body);
      res.send("skill Updated");
    } catch {
      res.send("Error while updating a skill");
    }
  },
  delete: async (req, res) => {
    try {
      const deletedskill = dataSource
        .getRepository(skillEntity)
        .delete(req.params.id);
      res.send("skill Deleted");
    } catch {
      res.send("Error while deleting a skill");
    }
  },
};
