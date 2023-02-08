const express = require("express");
const mongoConnection = require("./config/mongo.config");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const productRouter = require("./routes/product.routes");

app.use(express.json());

app.use("/api/products", productRouter);

app.listen(mongoConnection);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
