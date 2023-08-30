const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_DB);
    console.log("DB connected");
  } catch (error) {
    console.log(`Error connecting to DB: ${error}`);
  }
};

module.exports = { db };
