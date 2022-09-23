const { Router } = require("express");
const { cardController } = require("../controllers/card.controller");
const router = Router();

router.post("/movies", cardController.addCard);
router.get("/movies", cardController.getCard);

module.exports = router;