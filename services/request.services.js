const { request } = require("axios");

const getRequest = async (url) => {
  try {
    const res = await request({
      method: "GET",
      url,
    });
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  getRequest,
};