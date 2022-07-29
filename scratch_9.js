import {createReadStream, statSync} from "fs";


const tryCatch = (f) => {
    try {
        return {
            truthy: true,
            _: f()
        }
    } catch (e) {
        return {
            truthy: false,
            _: e
        };
    }
};
export const pathExists = (x) => tryCatch(() => statSync(x));

const doesExist = pathExists('/home/me').truthy;

doesExist ? console.log('\n### yes') : console.log('\n### no');
