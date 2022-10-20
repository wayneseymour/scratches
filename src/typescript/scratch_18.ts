const kibanaServer = getService('kibanaServer');
const spacesService = getService('spaces');
const id = 'another-space';
const settings = {
    buildNum: 8467,
    'dateFormat:tz': 'UTC',
};

describe('Enter Space', function () {
    this.tags('includeFirefox');
    before(async () => {
        await kibanaServer.uiSettings.replace({
            defaultRoute: '/app/evil',
            ...settings,
        });

        await spacesService.create({
            id,
            name: 'Another Space',
            disabledFeatures: [],
        });
        await kibanaServer.uiSettings.replace(
            {
                defaultRoute: '/app/canvas',
                ...settings,
            },
            { space: id }
        );

        await PageObjects.security.forceLogout();
    });
    after(async () => {
        await spacesService.delete(id);
    });




    proc [kibana] [2022-06-30T16:23:13.755+01:00][WARN ][ui-settings-service] Ignore invalid UiSettings value. Error: [validation [defaultRoute]]: Must be a relative URL..
