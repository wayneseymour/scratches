const controller = new AbortController();
const { signal } = controller;

fs.readFile("/Users/trezworkbox/dev/scratches/src/javascript/abort-controller/some-data.txt", { signal, encoding: "utf8" }, (error, data) => {
  if (error) {
    if (error.name === "AbortError") {
      console.log("Read file process aborted");
    } else {
      console.error(error);
    }
    return;
  }
  console.log(data);
});

controller.abort();
