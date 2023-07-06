const archives = [
  'test/functional/fixtures/es_archiver/many_fields',
  'x-pack/test/functional/es_archives/ml/farequote',
];

const res = archives.map((x) => {
  return {
    name: x,
    metrics: [],
  }
})
console.log(`\n### res: \n${JSON.stringify(res, null, 2)}`)

const archiveName = "x-pack/test/functional/es_archives/ml/farequote"
const found = res.find((x) => {
  // console.log(`\n### x: \n${JSON.stringify(x, null, 2)}`)
  const result = x.name === archiveName;
  console.log(`\n### result: \n${JSON.stringify(result, null, 2)}`)
  return result;
})
console.log(`\n### found: \n${JSON.stringify(found, null, 2)}`)
