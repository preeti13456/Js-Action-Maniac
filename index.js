const core = require('@actions/core');
const github = require('@actions/github');
const wait = require('./wait');


// most @actions toolkit packages have async methods
async function run() {
    try {
        const ms = core.getInput('milliseconds');
        // core.info(`Waiting ${ms} milliseconds ...`);

        // core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
        // await wait(parseInt(ms));
        // core.info((new Date()).toTimeString());

        //core.setOutput('time', new Date().toTimeString());
        const timeinsec = core.getInput('milliseconds');
        console.log(`Hello ${timeinsec}!`);
        const time = (new Date()).toTimeString();
        // core.setOutput("time", time);
        // Get the JSON webhook payload for the event that triggered the workflow
        const payload = JSON.stringify(github.context.payload, undefined, 2)
        console.log(`The event payload: ${payload}`);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();