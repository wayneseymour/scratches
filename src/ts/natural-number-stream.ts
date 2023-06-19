const naturalNumberStream = (max: number = Infinity) => {
  let i = 1;
  return new ReadableStream<number>({
    pull(controller) {
      if (i <= max) {
        controller.enqueue(i);
        i++;
      } else {
        controller.close();
      }
    },
  });
};
