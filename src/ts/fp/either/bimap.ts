import * as E from "fp-ts/lib/Either";
import {resolve} from 'path';
import {readFileSync} from 'fs';
import {pipe} from "fp-ts/lib/function";

interface FtrConfigWithOptions {
  [configPath: string]: {
    queue: string;
  };
}

interface FtrConfigsManifest {
  defaultQueue: string;
  disabled: string[];
  enabled: Array<string | FtrConfigWithOptions>;
}


const load = (x: string) =>
  readFileSync(x, 'utf8');

const FTR_CONFIGS_MANIFEST_REL = ".buildkite/ftr_configs.yml";
// const FTR_CONFIGS_MANIFEST_REL = ".buildkite/NOPE/ftr_configs.yml";

const root = "/Users/trezworkbox/dev/main.worktrees/from-pmuellers-pr";
// const root = "/Users/trezworkbox/NOPE/dev/main.worktrees/from-pmuellers-pr";

pipe(
  E.tryCatch(
    () => load(resolve(root, FTR_CONFIGS_MANIFEST_REL)),
    (_) => (_ instanceof Error ? _ : new Error('unknown error'))
  ),
  E.bimap((e) => ({
    type: 'SomeOtherError',
    error: E.toError(e),
  }), (x) => ({
    contents: x,
    excerpt: 'blahbitty blah blah'
  })),
  E.fold(
    (_: any) => _,
    (x) => x.excerpt
  )
);

