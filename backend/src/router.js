const express = require("express");

const router = express.Router();

// Gestion des articles
const articleControllers = require("./controllers/articleControllers");

router.get("/api/articles", articleControllers.browse);
router.get("/api/articles/:id", articleControllers.read);
router.put("/api/articles/:id", articleControllers.edit);
router.post("/api/articles", articleControllers.add);
router.delete("/api/articles/:id", articleControllers.destroy);

module.exports = router;
