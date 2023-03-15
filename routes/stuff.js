const express = require("express");
const router = express.Router();

const stuffControllers = require("../controllers/stuff");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.get("/", stuffControllers.getAllSauces);
router.post("/", multer, stuffControllers.createSauce);
router.get("/:id", stuffControllers.getOneSauce);
router.post("/:id/getUserLiked", stuffControllers.getUserLiked);
router.put("/:id", multer, stuffControllers.modifySauce);
router.delete("/:id", stuffControllers.deleteSauce);
router.post("/:id/like", stuffControllers.addLike);

module.exports = router;
