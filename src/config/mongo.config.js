const mongoose = require("mongoose");

const mongoConnection = () => {
  const connect = mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected with MongoDB");
    })
    .catch((err) => {
      console.log("Failed to connect to MongoDB", err);
    });
  return connect;
};

module.exports = mongoConnection;
