const { cryptoRender } = require("../helpers/crypto.helpers");
const { getRequest } = require("./request.services");

const getCryptoData = async () => {
  try {
    const resData = await getRequest("https://www.cryptingup.com/api/markets");

    return cryptoRender(resData);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  getCryptoData,
};