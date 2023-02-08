const Product = require("../schemas/product.schema");

class ProductController {
  static findAll = async (req, res) => {
    try {
      const product = await Product.find();
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  static create = async (req, res) => {
    try {
      const product = await Product.create(req.body);
      await product.save();
      return res.status(201).json(product);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  };

  static findOne = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findOne({ where: { id: id } });
      if (!product) return res.status(404).json({ error: error.message });
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  static update = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById({ id: id });
      if (!product)
        return res.status(404).json(`Error to find product with id ${id}`);
      await Product.findByIdAndUpdate(id, product);
      return res.status(200).json("Product updated successfully.");
    } catch (error) {
      return res.status(500).json("Error to update the product");
    }
  };

  static delete = async (req, res) => {
    try {
      const id = req.params;
      const product = await Product.findById({ id: id });
      if (!product) return res.status(404).json("Product not found");
      await Product.findByIdAndDelete(id);
      return res.status(200).json("Product deleted successfully");
    } catch (error) {
      return res
        .status(400)
        .json(`Error to delete the product with id ${id}`, error);
    }
  };
}

module.exports = ProductController;
