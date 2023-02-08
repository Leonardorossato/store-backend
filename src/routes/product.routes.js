const express = require("express");
const ProductController = require("../controllers/product.controller");
const router = express.Router();

router.get("/", ProductController.findAll);
router.get("/:id", ProductController.findOne);
router.post("/create", ProductController.create);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.delete);

module.exports = router;
