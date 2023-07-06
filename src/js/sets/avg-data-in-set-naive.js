const xs = new Set();
xs.add(mf(1));
xs.add(fq(1));
// xs.add(mf(2));
// xs.add(fq(2));

const averages = {
  name: "",
  avg: 0,
  metrics: [],
};
const sum = (xs) =>
  xs.reduce((a, b) => {
    a = a + b;
    return a;
  }, 0);
const length = (xs) => xs.length;
const avg = (nums) => sum(nums) / length(nums);
const seconds = (xnumber) => x / 1000;
for (const x of xs) {
  // console.log(`\n### x: \n${JSON.stringify(x, null, 2)}`);
  const { metrics } = x;
  const ms = metrics.map((x) => {
    return x.milliseconds;
  }, []);
  // console.log(`\n### ms: \n${JSON.stringify(ms, null, 2)}`)
  const a = avg(ms)
  // console.log(`\n### a: \n${JSON.stringify(a, null, 2)}`)
  const floored = Math.floor(a)
  x.avg = floored
  console.log(`\n### x: \n${JSON.stringify(x, null, 2)}`)

}

function fq(n) {
  return {
    name: "x-pack/test/functional/es_archives/ml/farequote",
    label: `Load #${n} of Archive: [x-pack/test/functional/es_archives/ml/farequote]`,
    metrics: [
      {
        milliseconds: 9218,
      },
      {
        milliseconds: 9219,
      },
      {
        milliseconds: 9431,
      },
    ],
    avg: 0,
  };
}
function mf(n) {
  return {
    name: "test/functional/fixtures/es_archiver/many_fields",
    label: `Load #${n} of Archive: [test/functional/fixtures/es_archiver/many_fields]`,
    metrics: [
      {
        milliseconds: 998,
      },
      {
        milliseconds: 1390,
      },
      {
        milliseconds: 1009,
      },
    ],
    avg: 0,
  };
}
// function rand() {
//   return Math.floor(Math.random() * 10000);
// }
