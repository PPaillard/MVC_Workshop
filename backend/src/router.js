const express = require("express");

const router = express.Router();
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./middlewares/auth");

const authControllers = require("./controllers/authControllers");
const articleControllers = require("./controllers/articleControllers");
const userControllers = require("./controllers/userControllers");

// Auth
router.post("/api/register", hashPassword, userControllers.add);
router.post(
  "/api/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// Gestion des articles
router.get("/api/articles", articleControllers.browse);
router.get("/api/articles/:id", articleControllers.read);
router.post("/api/articles", verifyToken, articleControllers.add);
router.put("/api/articles/:id", verifyToken, articleControllers.edit);
router.delete("/api/articles/:id", verifyToken, articleControllers.destroy);

// Gestion des users
router.get("/api/users", userControllers.browse);
router.get("/api/users/:id", userControllers.read);
router.post("/api/users", hashPassword, verifyToken, userControllers.add);
router.put("/api/users/:id", hashPassword, verifyToken, userControllers.edit);
router.delete("/api/users/:id", verifyToken, userControllers.destroy);

module.exports = router;
