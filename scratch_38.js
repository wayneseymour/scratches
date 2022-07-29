import { join } from 'path';
import { SuperTest } from 'supertest';
import { ToolingLog } from '../../../../../development/projects/kibana/packages/kbn-dev-utils';

export const dirFile = (destDir: string) => (filePath: string = 'exported.ndjson') => {
  const destFilePath = join(destDir, filePath);
  return [destDir, destFilePath];
};

export const importData = (appName: string, archiveDir = 'test/functional/fixtures/exported_saved_objects') => (supertest: SuperTest<any>) => async (
  log: ToolingLog
) => {
  const [, srcFilePath] = dirFile(join(archiveDir, 'discover'))();
