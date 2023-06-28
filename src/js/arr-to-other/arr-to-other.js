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
