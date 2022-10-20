import {fromEventPattern, fromEvent, from, tap, filter} from 'rxjs';
import {map, mergeMap, takeUntil, bufferCount, pluck, scan} from 'rxjs/operators';
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const {resolve, join} = require('path');
const {readdir} = require('fs').promises;
const noop = () => {
};
const getPrChangesResults = [{
  "sha": "a5c66b98a49e64123541a5a27bb16de2641ae2af",
  "filename": ".buildkite/scripts/lifecycle/assert-own-tests-ran.md",
  "status": "added",
  "additions": 28,
  "deletions": 0,
  "changes": 28,
  "blob_url": "https://github.com/elastic/kibana/blob/8da5ae0e28ec423b2d0daa13bd698d0793d48dc3/.buildkite%2Fscripts%2Flifecycle%2Fassert-own-tests-ran.md",
  "raw_url": "https://github.com/elastic/kibana/raw/8da5ae0e28ec423b2d0daa13bd698d0793d48dc3/.buildkite%2Fscripts%2Flifecycle%2Fassert-own-tests-ran.md",
  "contents_url": "https://api.github.com/repos/elastic/kibana/contents/.buildkite%2Fscripts%2Flifecycle%2Fassert-own-tests-ran.md?ref=8da5ae0e28ec423b2d0daa13bd698d0793d48dc3",
  "patch": "@@ -0,0 +1,28 @@\n+# Assert that our modified test(s) actually ran in CI\n+\n+As a feature developer it'd be nice if ci told me if \n+my own tests actually ran...the tests I modified in my pr.\n+\n+First we need to run this check on a completed ci run.\n+Probably means running this within `.buildkite/scripts/lifecycle/post_build.sh`\n+\n+Next, we need to know which of our committed files are actually tests\n+\n+Then, we need to take that list of tests and find their config(s).\n+\n+Then, we need to somehow interrogate the ci output to see if our committed test's config(s) ran\n+\n+Finally, we need to at least print that out in the log\n+\n+> Optionally, we could report that status back to the ci metadata\n+\n+> Optionally, we could report that status back to the pr\n+\n+\n+## Some Constraints\n+\n+Of note, pull request ci jobs and code coverage ci jobs \n+are currently different since the code coverage ci job\n+does not run any ftr configs.\n+\n+So, does that mean we only run this check on pull request jobs?  **Probably!**"
}, {
  "filename": "test/functional/apps/context/classic/_filters.ts"
}, {
  "filename": "x-pack/test/functional/apps/advanced_settings/feature_controls/advanced_settings_security.ts"
}, {
  "filename": "x-pack/test/functional/apps/license_management/feature_controls/license_management_security.ts"
}];

const testDirectories = ['test/functional/apps', 'x-pack/test/functional/apps']

const isTest = regexes => filePath => regexes.some(re => re.test(filePath))

async function* readDir(directory) {
  for (const x of await readdir(directory)) yield x;
}

const isConfig = (x) => /.*config\.(ts|js)/.test(x);
const directoryOf = (x) => dirname(x);

// TODO-TRE: Use a back stop the test directory.
// TODO-TRE: Once it reaches the backstop, stop iterating.
let count = 0;
export const findConfigFiles = (xs) => async (filePath) => {
  xs = xs || [];
  if (count === 4) {
    return xs;
  }
  count++;
  const directory = directoryOf(filePath);
  for await (const x of readDir(directory))
    if (isConfig(x)) {
      xs.push(resolve(directory, x))
    }
      // return resolve(directory, x);

  return await findConfigFiles(xs)(directory);
};


const testDirectoryRegexes = () => testDirectories.map(x => new RegExp(x))
  // ;(async () => {
  //   from(getPrChangesResults)
  //     .pipe(
  //       pluck('filename'),
  //       filter(isTest(testDirectoryRegexes())),
  //       // mergeMap(async (x) => [x, [await findconfigfiles(x)]])
  //     )
  //     .subscribe({
  //       next: x => console.log(`\n### x: \n${JSON.stringify(x, null, 2)}`),
  //       // next: noop,
  //       error: e => console.error(`\n### e: \n\t${e}`),
  //       complete: () => console.log('\n### complete')
  //     })
  // })()

  (async () => {
    findConfigFiles('test/functional/apps/context/classic/_filters.ts')
  })()
