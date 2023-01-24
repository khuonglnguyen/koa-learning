const { getRequest } = require("../services/request.services");
const redis = require("redis");
const fs = require("fs");

// create and connect redis client to local instance.
const client = redis.createClient(6379);
client.connect().then(() => {
  console.log("Success");
});
// echo redis errors to the console
client.on("error", (err) => {
  console.log("Error " + err);
});

const getPhotos = async (ctx) => {
  try {
    const photos = await client.exists("photos");
    if (photos) {
      const data = await client.get("photos");
      ctx.body = JSON.parse(data);
      ctx.status = 200;
    } else {
      const resData = await getRequest(
        "https://jsonplaceholder.typicode.com/photos"
      );

      if (resData) {
        // Save the  API response in Redis store,  data expire time in 3600 seconds, it means one hour
        client.setEx("photos", 3600, JSON.stringify(resData));
        // client.set("photos", JSON.stringify(photos));
        // Send JSON response to client
        ctx.body = resData;
        ctx.status = 200;
      }
    }
  } catch (err) {
    ctx.body = err;
    ctx.status = 500;
  }
};

const postPhotos = async (ctx) => {
  try {
    const file = ctx.request.files.file;

    fs.readFile(file.filepath, function (err, data) {
      if (err) {
        console.log("Error!\n");
      } else {
        fs.writeFile(`./upload/${file.originalFilename}`, data, (err) => {
          if (err) console.log(err);
          else {
            console.log("File written successfully\n");
          }
        });
      }
    });
  } catch (err) {
    ctx.body = err;
    ctx.status = 500;
  }
};

module.exports = {
  getPhotos,
  postPhotos,
};
