const myAbortableApi = (options = {}) => {
  const { signal } = options;

  if (signal?.aborted === true) {
    throw new Error(signal.reason);
  }

  const abortEventListener = () => {
    console.log("### abortEventListener fired");
  };
  if (signal) {
    signal.addEventListener("abort", abortEventListener, { once: true });
  }
  try {
    // Run some asynchronous code
    if (signal?.aborted === true) {
      throw new Error(signal.reason);
    }
    // Run more asynchronous code
  } finally {
    if (signal) {
      signal.removeEventListener("abort", abortEventListener);
    }
  }
};

// const controller = new AbortController();
// const { signal } = controller;
// myAbortableApi({
//   signal,
// });
myAbortableApi({
  signal: AbortSignal.abort()
});

