const Router = require("express").Router();

module.exports = (sequelize) => {
  const { getAllUsers } = require("../controllers/UserController")(sequelize);

  Router.get("/", getAllUsers);

  return Router;
};
