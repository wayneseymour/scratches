import moment from "moment";

function formatTime (
    time: { from: string; to: string },
    fmt: string = 'MMM D, YYYY @ HH:mm:ss.SSS'
) {
    return Object.keys(time)
        .map((x: any) => moment(time[x], [fmt]).format())
        .reduce(
            (acc, curr, idx) => {
                if (idx === 0) acc.from = curr;
                acc.to = curr;
                return acc;
            },
            {from: '', to: ''}
        );
}

const from = 'Nov 1, 2017 @ 00:00:00.000';
const to = 'Mar 21, 2018 @ 00:00:00.000';

formatTime({ from, to })

