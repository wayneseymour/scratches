const obj = {
  archive: {
    name: "x-pack/test/functional/es_archives/ml/farequote",
    beforeLoadTimeStamp: "13:55:123",
    afterLoadTimeStamp: "13:55:938",
    diff: {
      milliseconds: 3815,
    },
  },
};
const diff = obj?.archive?.diff?.milliseconds;
diff

const name = obj?.archive?.name
name
