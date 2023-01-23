const NodeCache = require("node-cache");
const shortCache = new NodeCache({ stdTTL: 60 * 15 });

module.exports = {
  shortCache,
};