const mongoose = require("mongoose");

function connect(callback) {
  try {
    mongoose.connect(process.env.DB_URI);
    mongoose.connection.on("error", () => console.error(error));
    mongoose.connection.once("open", async () => {
      console.log("Connected to database");
      await callback();
    });
  } catch (error) {
    console.error(error);
  }
}
module.exports = connect;
