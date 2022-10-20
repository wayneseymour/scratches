import * as Rx from 'rxjs';
import { lastValueFrom } from 'rxjs';
import { filter, first, map, switchMap, tap, timeout } from 'rxjs/operators';
import { FtrProviderContext } from '../ftr_provider_context';

// eslint-disable-next-line import/no-default-export
export default function ({ getService }: FtrProviderContext) {
    const esArchiver = getService('esArchiver');
    const kibanaServer = getService('kibanaServer');
    const reportingAPI = getService('reportingAPI');
    const supertest = getService('supertest');
    const spacesService = getService('spaces');

    const log = getService('log');

    const setSpaceConfig = async (spaceId: string, settings: object) => {
        return await kibanaServer.request({
            path: `/s/${spaceId}/api/kibana/settings`,
            method: 'POST',
            body: { changes: settings },
        });
    };

    const getCompleted$ = (downloadPath: string) => {
        return Rx.interval(2000).pipe(
            tap(() => log.debug(`checking report status at ${downloadPath}...`)),
            switchMap(() => supertest.get(downloadPath)),
            filter(({ status: statusCode }) => statusCode === 200),
            tap(() => log.debug(`report at ${downloadPath} is done`)),
            map((response) => response.text),
            first(),
            timeout(120000)
        );
    };
