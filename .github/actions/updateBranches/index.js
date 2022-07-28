const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const token = core.getInput('action_bot_token');
    const octokit = github.getOctokit(token);

    const baseBranch = github.context.payload.ref;
    const pullsResponse = await octokit.rest.pulls.list({
      ...github.context.repo,
      base: baseBranch,
      state: 'open'
    });

    const prs = pullsResponse.data;

    await Promise.all(
      prs.map((pr) => {
        octokit.rest.pulls.updateBranch({
          ...github.context.repo,
          pull_number: pr.number
        });
      })
    );
  } catch (error) {
    core.error(error);
    core.setFailed(error);
  }
}

run();
