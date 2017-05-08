/**
* The script pulls from this config to determine how to set up a workspace
*/

const config = {
    'projectName': {
        path: `/Users/me/projectName`,
        sync: [`open -n https://`],
        links: [`<link to helpful website>`],
        async: [`subl .`],
    },
    'anotherProject': {
        path: `/User/me/anotherProject`,
        sync: [`open -n https://`],
        async: ['subl .'],
    }
};

module.exports = config;