import Path from "path";
import Fs from "fs";
import { execSync } from 'child_process';

const parentDir = (root: string) => (x: string) =>
  execSync(`dirname ${x}`, { cwd: root, encoding: 'utf8' });
const ls = (root: string) => (x: string) => execSync(`ls ${x}`, { cwd: root, encoding: 'utf8' });
const lsMsg = (root: string) => (x: string) => {
  // eslint-disable-next-line no-console
  console.log(`--- Contents of: ${Path.resolve(root, x)}\n`);
  return ls(x);
};

let repoRootParent;
let repoRootParentContents;
// eslint-disable-next-line no-console
console.log('\n--- Show some path info!');

try {
  repoRootParent = parentDir(root)(root);
  repoRootParentContents = ls(root)(repoRootParent);
  // eslint-disable-next-line no-console
  console.log(`\n### Parent Directory of REPO_ROOT: ${repoRootParent}
### Contents of ${repoRootParent}
${repoRootParentContents}
`);
} catch (e) {
  // eslint-disable-next-line no-console
  console.error(`\n### Error looking at paths e: \n  ${e}`);
}
