const immediateP = async () => await Promise.resolve("some immediate result");

const it = (msg: string, fn: () => Promise<unknown>) => {

}

it(`asdf`, async () => {
  await immediateP();
});
