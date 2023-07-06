
const xs = new Set();
xs.add(mf(1));
xs.add(fq(1));
xs.add(mf(2));
xs.add(fq(2));

for (const x of xs) {
  console.log(`\n### x: \n${JSON.stringify(x, null, 2)}`);
}

function fq(n) {
  return {
    name: "x-pack/test/functional/es_archives/ml/farequote",
    label: `Load #${n} of Archive: [x-pack/test/functional/es_archives/ml/farequote]`,
    metrics: [
      {
        milliseconds: 10316,
      },
    ],
  };
}
function mf(n) {
  return {
    name: "test/functional/fixtures/es_archiver/many_fields",
    label: `Load #${n} of Archive: [test/functional/fixtures/es_archiver/many_fields]`,
    metrics: [
      {
        milliseconds: 1392,
      },
    ],
  };
}
// function rand() {
//   return Math.floor(Math.random() * 10000);
// }
