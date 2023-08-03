import * as stream from "stream";

/**
 * Reads all the text in a readable stream and returns it as a string,
 * via a Promise.
 * @param {stream.Readable} readable
 */
function readableToString(readable) {
  return new Promise((resolve, reject) => {
    let data = "";
    readable.on("data", function (chunk) {
      data += chunk;
    });
    readable.on("end", function () {
      resolve(data);
    });
    readable.on("error", function (err) {
      reject(err);
    });
  });
}
