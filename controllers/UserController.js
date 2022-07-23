module.exports = (sequelize) => {
  const User = require("../models/User")(sequelize);
  const getAllUsers = async (req, res, next) => {
    const users = await User.findAll().catch((err) => {
      throw err;
    });
    return res.status(200).json({
      success: true,
      message: users,
    });
  };

  return {
    getAllUsers,
  };
};
