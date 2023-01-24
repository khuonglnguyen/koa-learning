const Router = require("koa-router");
const router = new Router();
const { getEvents, postEvent } = require("./controllers/events.controllers");
const { getPhotos, postPhotos } = require("./controllers/photos.controllers");
const { cryptoListCache } = require("./middleware/crypto.cache");
const { getCryptoList } = require("./controllers/crypto.controllers");

router.get("/crypto_list", cryptoListCache, getCryptoList);
router.get("/events_list", getEvents);
router.get("/photos_list", getPhotos);
router.post("/post_photo", postPhotos);
router.post("/post_event", postEvent);

module.exports = router;