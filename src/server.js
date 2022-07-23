// required node_modules
require("dotenv").config();
const express = require("express");
const cors = require("cors");

// required internel modules
const sequelize = require("../database/connection");

const app = express();

// express middlewares
app.use(express.json());
app.use(cors());

// application routes
app.use("/user", require("../routes/user")(sequelize));
app.use("/track", require("../routes/track")(sequelize));

app.listen(process.env.PORT || 3001, () =>
  console.log(`Server is running on port :: ${process.env.PORT || 3001}`)
);
