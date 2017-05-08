const exec = require('child_process').exec;
const config = require('./config');

if (process.argv[2] !== undefined) {
    const projectName = process.argv[2];
    const project = config[projectName];

    const syncCalls = project['sync'];
    const links = project['links'];
    const asyncCalls = project['async'];

    const command = `
        ${formatSyncCalls(syncCalls)}
        ${formatLinks(links)}
        ${formatAsyncCalls(asyncCalls)}
    `;

    options = {cwd: project['path']};

    exec(command, options, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
    });
}

function formatLinks(links) {
    if (links) {
        return links.map((link) => `open ${link}; `).join('');
    }
}

function formatAsyncCalls(asyncCallsArray) {
    if (asyncCallsArray) {
        return asyncCallsArray.join('; ');
    }
}

function formatSyncCalls(syncCallsArray) {
    if (syncCallsArray) {
        return syncCallsArray.map((call) => `${call}; sleep 2; `).join('');
    }
}
