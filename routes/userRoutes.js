const express = require("express");
const userController = require("../controller/userController");
const basicAuth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/worko/user", userController.listUsers);
router.get("/worko/user/:userId", userController.getUserDetails);
router.post("/worko/user", userController.createUser);
router.put("/worko/user/:userId", userController.updateUser);
router.patch("/worko/user/:userId", userController.patchUser);
router.delete("/worko/user/:userId", userController.deleteUser);

module.exports = router;
