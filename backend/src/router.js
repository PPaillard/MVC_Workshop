const express = require("express");
// Ajout de multer
const multer = require("multer");

const fileDirectory = process.env.AVATAR_DIRECTORY

// On définit la destination de stockage de nos fichiers
const upload = multer({ dest: fileDirectory });
const router = express.Router();

// services d'auth
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

const authControllers = require("./controllers/authControllers");
const articleControllers = require("./controllers/articleControllers");
const userControllers = require("./controllers/userControllers");
const uploadControllers = require("./services/uploadMiddleware")

// Auth
router.post("/api/register", hashPassword, userControllers.add);
router.post(
  "/api/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// Gestion des articles
router.get("/api/articles", verifyToken, articleControllers.browse);
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

// Upload de fichier
// route POST pour recevoir un fichier dont le nom est "avatar"
router.post("/api/avatar",verifyToken, upload.single("avatar"), uploadControllers.renameFile, userControllers.updateAvatar);

module.exports = router;
