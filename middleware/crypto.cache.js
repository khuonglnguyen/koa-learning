const { shortCache } = require("./cache");

const cryptoListCache = (ctx, next) => {
  try {
    if (shortCache.has("crypto-list")) {
      return (ctx.body = shortCache.get("crypto-list"));
    }
    return next();
  } catch (err) {
    ctx.status = 500;
    console.log(err);
    throw err;
  }
};

module.exports = {
  cryptoListCache,
};