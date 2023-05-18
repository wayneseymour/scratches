let receiveMessage = function () {};
function waitForNextMessageList() {
  let messageBuffer = [];
  return new Promise((resolve) => {
    receiveMessage = (message) => {
      messageBuffer.push(message);
      // Only resolve the promise for the first message in the
      // current call stack. After that we can keep pushing messages
      // to the buffer.
      if (messageBuffer.length === 1) {
        resolve(messageBuffer);
      }
    };
  });
}
async function* createMessageListStream() {
  while (true) {
    yield waitForNextMessageList();
  }
}
async function* createMessageStream() {
  let messageListStream = createMessageListStream();
  for await (let messageList of messageListStream) {
    for (let message of messageList) {
      yield message;
    }
  }
}
async function startConsumingMessageStream() {
  for await (const messages of createMessageStream()) console.log(messages);
}
startConsumingMessageStream();
setTimeout(() => {
  receiveMessage('Hello');
  receiveMessage('A');
  receiveMessage('B');
  receiveMessage('C');
}, 500);
setTimeout(() => {
  receiveMessage('world');
}, 1000);
setTimeout(() => {
  receiveMessage('!!!');
}, 3000);
