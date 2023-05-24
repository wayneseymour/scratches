const fs = require("fs");
const cp = require("child_process");

const cmd = "ls";

// Pipe is the default, so all three stdio streams will not be null

// Also, { stdio: 'pipe' } == ['pipe', 'pipe', 'pipe']
// const res = cp.execSync('find ./src/dev/code_coverage -maxdepth 1 -ls', { cwd: '/Users/trezworkbox/dev/main', encoding: 'utf8'})
// const res = cp.execSync(`dirname /Users/trezworkbox/dev/main`, { cwd: '/Users/trezworkbox/dev/main', encoding: 'utf8'})
//
// console.log(`\n### res: \n  ${res}`)

const execSync = cp.execSync;

const REPO_ROOT = "/Users/trezworkbox/dev/main";
const parentDir = (x: string) =>
  execSync(`dirname ${x}`, { cwd: REPO_ROOT, encoding: "utf8" });
const contents = (x: string) =>
  execSync(`ls ${x}`, { cwd: REPO_ROOT, encoding: "utf8" });
const contentsAtDepth =
  (n: number = 2) =>
  (x: string) =>
    execSync(`find ${x} -maxdepth ${n} -ls`, { cwd: REPO_ROOT, encoding: "utf8" });
let repoRootParent;
let repoRootParentContents;
let repoRootParentContentsDepth2;

console.log("\n--- Show some path info!");

try {
  repoRootParent = `${parentDir(REPO_ROOT)}`; // String conversion hack
  repoRootParentContents = contents(repoRootParent);
  // repoRootParentContentsDepth2 = contentsAtDepth()(`${repoRootParent}`);
} catch (e) {
  console.error(`\n### Error looking at paths, e: \n ${e}`);
}

console.log(`\n### repoRootParent: \n  ${repoRootParent}`);
console.log(`\n### repoRootParentContents: \n${repoRootParentContents}`);

console.log(JSON.stringify({
  "ftr_configs_0": {
    "title": "FTR Configs #1",
    "expectedDurationMin": 35.4,
    "names": [
      "x-pack/test/alerting_api_integration/security_and_spaces/group2/config_non_dedicated_task_runner.ts",
    ]
  }
}, null, 2));
