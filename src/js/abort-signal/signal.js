const controller = new AbortController();
const { signal } = controller;

signal.addEventListener(
  "abort",
  () => {
    console.log("First event handler");
  },
  { once: true }
);
signal.addEventListener(
  "abort",
  () => {
    console.log("Second event handler");
  },
  { once: true }
);

// signal.addEventListener(
//   "abort",
//   () => {
//     console.log("not once event handler");
//   }
// );

controller.abort();
controller.abort();
