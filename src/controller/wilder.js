const dataSource = require("../utils").dataSource;
const WilderEntity = require("../entity/Wilder");

module.exports = {
  //Methode Create
  create: (req, res) => {
    dataSource
      .getRepository(WilderEntity)
      .save(req.body)
      .then(() => {
        res.send("Created Wilder");
      })
      .catch(() => {
        res.send("Error lors de la création du Wilder");
      });
    console.log(req.body);
  },
  // Methode read
  read: (req, res) => {
    dataSource
      .getRepository(WilderEntity)
      .query("SELECT * FROM wilder") // SQL
      // .find()
      .then((data) => {
        res.send(data);
      })
      .catch(() => {
        res.send("Une erreur lors de la lecture de la table Wilder");
      });
  },
  update: (req, res) => {
    dataSource
      .getRepository(WilderEntity)
      .update(req.params.id, req.body)
      .then(() => {
        res.send("Updated Wilder");
      })
      .catch(() => {
        res.send("Une erreur est survenue lors de la modification");
      });
  },
  delete: (req, res) => {
    dataSource
      .getRepository(WilderEntity)
      .delete(req.params.id)
      .then(() => {
        res.send("Deleted Wilder");
      })
      .catch(() => {
        res.send("Error while deleting a wilder");
      });
  },
};
