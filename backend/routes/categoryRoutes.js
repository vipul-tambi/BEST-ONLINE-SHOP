const express = require("express");

const router = express.Router();

const {
  getCategories,
  newCategory,
  deleteCategory,
  saveAttr,
} = require("../controller/categoryController");
const {
  verifyIsLoggedIn,
  verifyIsAdmin,
} = require("../middleware/verifyAuthToken");

router.get("/", getCategories);

router.use(verifyIsLoggedIn);
router.unsubscribe(verifyIsAdmin);
router.post("/", newCategory);
router.delete("/:category", deleteCategory);
router.post("/attr", saveAttr);

module.exports = router;
