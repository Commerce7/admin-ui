const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const labels = github.context.payload.pull_request.labels;

    if (labels.length !== 0) {
      throw new Error('Labels must be removed before merging into main. ');
    }
  } catch (error) {
    core.error(error);
    core.setFailed(error);
  }
}

run();
