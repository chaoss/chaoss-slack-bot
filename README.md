# chaoss-slack-bot

## About

This holds the code to the CHAOSS slack bot for newcomers to the project.  Built with  [Bolt for JavaScript](https://slack.dev/bolt-js/concepts).

## Documentation
[CHAOSS Slack Bot Docs](https://docs.google.com/document/d/1NJd-nNKUNb3Q0lRb5cfmUU8kpRcYGjh-vPqpk4CCvic/edit?usp=sharing)

## Bot Function

- When a user joins the team, sends a message in a predefined channel asking them to introduce themselves.
- When a user joins the team, sends an interactive message via DM to determine what thy need to contribute and provide the relevant resources.
- Responds when a user says "hello", "hey" or "hi".


## Contribution Guide

We love to pull requests from everyone! We follow the standard Git workflow of `fork -> change -> pull request -> merge -> update fork -> change ... (repeat forever)`. If you are new to open source, we recommend GitHub's excellent guide on "[How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)". In addition, please feel free to reach out to any of the maintainers or other community members if you are struggling; we are here to help you learn!

### Opening an issue
If you're experiencing an issue with CHAOSS Slack Bot or have a question you'd like help answering, please feel free to open an [issue](https://github.com/chaoss/chaoss-slack-bot/issues). To help us prevent duplicates, we kindly ask that you briefly search for your problem or question in our [issues](https://github.com/chaoss/chaoss-slack-bot/issues) before opening a new one.

Please note that if you open a bug report, we cannot help you until you have provided us with all the relevant information. Respectfully, we do not have the time to try and recreate an error given with minimal or no context, so by providing this information you are helping us help you! Provide descriptions to the best of your ability, and please include screenshots and error logs if applicable.

### Contributing to the source code
Please refer to the [documentation](https://docs.google.com/document/d/1NJd-nNKUNb3Q0lRb5cfmUU8kpRcYGjh-vPqpk4CCvic/edit?usp=sharing) for the complete guide on getting started with Bolt.

1. Fork this repo, and then clone it:
```bash
$ git clone https://github.com/chaoss/chaoss-slack-bot.git
$ cd chaoss-slack-bot
$ git remote add upstream https://github.com/chaoss/chaoss-slack-bot.git
```

2. Install dependencies `npm install` or `yarn add`.

3. Create a new branch
```bash
$ git checkout -b my-new-branch
```
4. Make your change(s).

5. Commit the change(s) with a descriptive commit message (here's a [guide](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/) for writing good commit messages) and push to your fork.
```bash
$ git add .
$ git commit -s -m "descriptive commit message"
$ git push -u origin my-new-branch
```
6. Submit a pull request.

At this point, you're waiting on us. We like to at least comment on pull requests
within three business days (and, typically, one business day). Once one of our maintainers has had a chance to review your PR, we will either mark it as "needs review" and provide specific feedback on your changes, or we will go ahead and complete the pull request.

### Signing-off on Commits
To contribute to this project, you must agree to the [Developer Certificate of Origin](https://developercertificate.org/) by the [CHAOSS charter](https://chaoss.community/about/charter/#user-content-8-intellectual-property-policy) for each commit you make. The DCO is a simple statement that you, as a contributor, have the legal right to make the contribution.
To signify that you agree to the DCO for contributions, you simply add a line to each of your
git commit messages:

  ```
  Signed-off-by: Jane Smith <jane.smith@example.com>
  ```
This can be easily done by using the `-s` flag when using `git commit`. For example:

```
$ git commit -s -m “my commit message w/signoff”
```
To ensure all your commits are signed, you may choose to [configure git](https://gist.github.com/xavierfoucrier/c156027fcc6ae23bcee1204199f177da) properly by editing your global ```.gitconfig```

**Any pull requests containing commits that are not signed off will not be eligible for merge until the commits have been signed off.** 

### Keeping in sync with the Chaoss Slack Bot Repository

Remeber to sync your fork with the main branch regularly.
To do this:

Go to github and copy the url of the main Chaoss Slack Bot repo
   ```   
   https://github.com/chaoss/chaoss-slack-bot.git
   ```
   make sure to be in the rootfolder of the project and the branch should be master branch and type
   ```
   git remote add upstream https://github.com/chaoss/chaoss-slack-bot.git
   ```
   Now you have your upstream setup in your local machine,whenever you need to make a new branch for making changes make sure your main branch is in sync with the main repository, to do this,make sure to be in the main branch and type

   ```
   git pull upstream master
   git push origin master
   ```


## Community Resources

### CHAOSS
- [Website](https://chaoss.community/)
- [Get Involved](https://chaoss.community/participate)
- [Metrics](https://github.com/chaoss/metrics)
- [Evolution Metrics Working Group](https://github.com/chaoss/wg-evolution)
- [Common Metrics Working Group](https://github.com/chaoss/wg-common)
- [Risk Metrics Working Group](https://github.com/chaoss/wg-risk)
- [Value Metrics Working Group](https://github.com/chaoss/wg-value)
- [Diversity & Inclusion Metrics Working Group](https://github.com/chaoss/wg-diversity-inclusion)

## Technical Resources

### Git & GitHub
- [How to contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [GitHub's Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [GitHub's "Hello World" tutorial](https://guides.github.com/activities/hello-world/)
- [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/)
- [Commit message style guidelines](https://commit.style/)
- [No-nonsense Git reference](https://rogerdudler.github.io/git-guide/) (best to have a cursory understanding of Git before hand)
- [A Complete Guide to DCO for Open Source Developers](https://www.secondstate.io/articles/dco/)

### Slack API & Bolt for JavaScript
- [Getting started with Bolt for JavaScript](https://slack.dev/bolt-js/tutorial/getting-started).
- [Slack API developer docs and guides](https://api.slack.com/docs).

### Testing
- [Official Jest documentation](https://jestjs.io/docs/getting-started).
- [Jest Tutorial for Beginners](https://www.valentinog.com/blog/jest/).
