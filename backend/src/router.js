const express = require("express");

const router = express.Router();

// Gestion des items
const itemControllers = require("./controllers/itemControllers");

router.get("/api/items", itemControllers.browse);
router.get("/api/items/:id", itemControllers.read);
router.put("/api/items/:id", itemControllers.edit);
router.post("/api/items", itemControllers.add);
router.delete("/api/items/:id", itemControllers.destroy);

// Gestion des articles
const articleControllers = require("./controllers/articleControllers");

router.get("/api/articles", articleControllers.browse);
router.get("/api/articles/:id", articleControllers.read);
router.put("/api/articles/:id", articleControllers.edit);
router.post("/api/articles", articleControllers.add);
router.delete("/api/articles/:id", articleControllers.destroy);

module.exports = router;
