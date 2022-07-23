const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Track", {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    track_id: {
      type: Sequelize.INTEGER,
    },
  });
};
