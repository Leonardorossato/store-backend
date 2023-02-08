const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    message: "Product name must be provider",
  },
  price: { type: Number, required: true, default: 1 },
  featured: { type: Boolean, default: false },
  rating: { type: Number, default: 4.5 },
  company: { type: String, enum: ["Microsoft", "Apple", "Xiaomi"] },
  createdAt: { type: Date, default: Date.now(), required: false },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
