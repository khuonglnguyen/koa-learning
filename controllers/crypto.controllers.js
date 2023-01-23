const { shortCache } = require("../middleware/cache");
const { getCryptoData } = require("../services/crypto.services");

const getCryptoList = async (ctx) => {
  try {
    const resData = await getCryptoData();
    shortCache.set("crypto-list", resData);
    ctx.body = resData;
    ctx.status = 200;
  } catch (err) {
    ctx.body = "Error!";
    ctx.status = 500;
    console.log(err);
    throw err;
  }
};

module.exports = {
  getCryptoList,
};