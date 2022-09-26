const { Router } = require("express");
const { cardController } = require("../controllers/card.controller");
const router = Router();

router.post("/card", cardController.addCard);
router.get("/card", cardController.getCard);
router.patch('/basket/plus', cardController.countPlus)
router.patch('/basket/minus', cardController.countMinus)


module.exports = router;