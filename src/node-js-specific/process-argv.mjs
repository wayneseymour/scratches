import { argv } from "node:process";

/*

So, with this run:
`node src/node-js-specific/process-argv.mjs kibana-serverless BUILDKITE_BRANCH BUILDKITE_COMMIT BUILDKITE_BUILD_ID`

Result:
```
0: /Users/trezworkbox/.nvm/versions/node/v16.19.1/bin/node
1: /Users/trezworkbox/dev/scratches/src/node-js-specific/process-argv.mjs
2: kibana-serverless
3: BUILDKITE_BRANCH
4: BUILDKITE_COMMIT
5: BUILDKITE_BUILD_ID
```

*/

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

console.log(`\n### process.argv0: \n  ${process.argv0}`);
console.log(`\n### process.argv[0]: \n  ${process.argv[0]}`);
