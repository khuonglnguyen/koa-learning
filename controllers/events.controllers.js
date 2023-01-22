const events = require('../models/event.models');

const getEvents = async ctx => {
  try {
      const foundEvents = await events.findAll();
      ctx.body = foundEvents;
      ctx.status = 200;
  } catch (err) {
      ctx.body = err;
      ctx.status = 500;
  }
};

const postEvent = async ctx => {
  try {
      const { name, adultsOnly, attendees, description } = ctx.request.body;

      await events.create({ name, adultsOnly, attendees, description });

      ctx.body = 'Event Created!'
      ctx.status = 201;
  } catch (err) {
      ctx.status = 500;
      throw (err)
  }
};

module.exports = {
  getEvents,
  postEvent
};