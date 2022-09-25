const { Router } = require("express");
const { cardController } = require("../controllers/card.controller");
const router = Router();

router.post("/card", cardController.addCard);
router.get("/card", cardController.getCard);

module.exports = router;