const Router = require("koa-router");
const router = new Router();
const { getEvents, addEvent } = require("./controllers/events.controllers");

router.get("/events_list", getEvents);
router.post("/add_event", addEvent);

module.exports = router;