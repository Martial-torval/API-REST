const dataSource = require("../utils").dataSource;
const WilderEntity = require("../entity/Wilder");
const skillEntity = require("../entity/Skill");

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
  addWilderSkill: async (req, res) => {
    const wilderToUpdate = await dataSource
      .getRepository(WilderEntity)
      .findOneBy({
        id: req.params.wilderId,
      });
    const skillToAdd = await dataSource.getRepository(skillEntity).findOneBy({
      id: req.params.skillId,
    });
    console.log("skillToAdd", skillToAdd);
    wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];

    await dataSource.getRepository(WilderEntity).save(wilderToUpdate);

    res.send("Skill added");
  },
};
