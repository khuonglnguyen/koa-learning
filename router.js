const Router = require("koa-router");
const router = new Router();
const { getEvents, postEvent } = require("./controllers/events.controllers");
const { cryptoListCache } = require("./middleware/crypto.cache");
const { getCryptoList } = require("./controllers/crypto.controllers");

router.get("/crypto_list", cryptoListCache, getCryptoList);
router.get("/events_list", getEvents);
router.post("/post_event", postEvent);

module.exports = router;