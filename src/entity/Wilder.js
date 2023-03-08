const EntitySchema = require("typeorm").EntitySchema;

// Module.export equal to export default on React
module.exports = new EntitySchema({
  name: "Wilder",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "text",
    },
  },
  relations: {
    skills: {
      target: "Skill",
      type: "many-to-many",
      joinTable: true, // load manually the wilder's skills
      eager: true, // load manually the wilder's skills
    },
  },
});
