# Introduction
Welcome! (i mirëpritur; welkom; bienvenue; benvenuto; witamy; bienvenidos; 欢迎 أهلا بك; ようこそ; 환영; chào mừng; soo dhawow; karibu; Taŋyáŋ yahípi; Ẹ káàbọ̀; ndewo; barka da zuwa) and thank you for checking us out!

Following these guidelines helps to communicate that you respect the time of the people managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

CHAOSS Slack Bot is an open source project and we love to receive contributions from our community — you! There are many ways to contribute, from improving the documentation, submitting bug reports and feature requests or writing code which can be incorporated into CHAOSS Slack Bot itself.

We follow the standard Git workflow of fork -> change -> pull request -> merge -> update fork -> change ... (repeat forever). If you are new to open source, we recommend GitHub's excellent guide on "How to Contribute to Open Source". In addition, please feel free to reach out to any of the maintainers or other community members if you are struggling; we are here to help you learn!

# Your First Contribution
**Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://kcd.im/pull-request).
At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first. 😸

# Getting Started
## Opening an issue
If you're experiencing an issue with CHAOSS Slack Bot or have a question you'd like help answering, please feel free to open an issue. To help us prevent duplicates, we kindly ask that you briefly search for your problem or question in our issues before opening a new one.
Please note that if you open a bug report, we cannot help you until you have provided us with all the relevant information. Respectfully, we do not have the time to try and recreate an error given with minimal or no context, so by providing this information you are helping us help you! Provide descriptions to the best of your ability, and please include screenshots and error logs if applicable.

## Contributing to the source code
1. Fork this repo, and then clone it
```
$ git clone https://github.com/chaoss/chaoss-slack-bot.git
$ cd chaoss-slack-bot
$ git remote add upstream https://github.com/chaoss/chaoss-slack-bot.git
```

2. Follow the [development setup instructions](https://github.com/chaoss/chaoss-slack-bot/blob/main/SETUP.md)

3. Install dependencies ```$ npm install``` or ```$ yarn add```

4. Create a new branch

```$ git checkout -b my-new-branch```

5. Make your change(s). We encourage you to write tests.

6. Commit the change(s) with a descriptive commit message and push to your fork. PS: here's a guide for [writing good commit messages](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/). if you’re not familiar with DCO, read the guide on [signing off commits](#signing-off-on-commits) before you come back to this step. 
```
$ git add .
$ git commit -s -m "descriptive commit message"
$ git push -u origin my-new-branch
```
 
7. Submit a pull request.

At this point, you're waiting on us. We like to at least comment on pull requests within three business days (and, typically, one business day). Once one of our maintainers has had a chance to review your PR, we will either mark it as "needs review" and provide specific feedback on your changes, or we will go ahead and complete the pull request.

## Signing-off on Commits
To contribute to this project, you must agree to the Developer Certificate of Origin by the CHAOSS charter for each commit you make. The DCO is a simple statement that you, as a contributor, have the legal right to make the contribution. To signify that you agree to the DCO for contributions, you simply add a line to each of your git commit messages:
Signed-off-by: Jane Smith <jane.smith@example.com>

This can be easily done by using the -s flag when using git commit. For example:
$ git commit -s -m "my commit message w/signoff"

To ensure all your commits are signed, you have to configure git properly by editing your global .gitconfig
```
$ git config --global user.name "John Doe" 
$ git config --global user.email johndoe@example.com
```

Any pull requests containing commits that are not signed off will not be eligible for merge until the commits have been signed off.

## Keeping in sync with the Chaoss Slack Bot Repository
Remember to sync your fork with the main branch regularly. To do this:
Make sure to be in the root folder of the project and the branch should be master branch and type
```
$ git remote add upstream https://github.com/chaoss/chaoss-slack-bot.git
```

Now you have your upstream setup in your local machine,whenever you need to make a new branch for making changes make sure your main branch is in sync with the main repository, to do this,make sure to be in the main branch and type:
```
$ git pull upstream master
$ git push origin master
```

# Community Resources
## CHAOSS
- [Website](https://chaoss.community/)
- [Get Involved](https://chaoss.community/participate)
- [Metrics](https://github.com/chaoss/metrics)
- [Evolution Metrics Working Group](https://github.com/chaoss/wg-evolution)
- [Common Metrics Working Group](https://github.com/chaoss/wg-common)
- [Risk Metrics Working Group](https://github.com/chaoss/wg-risk)
- [Value Metrics Working Group](https://github.com/chaoss/wg-value)
- [Diversity & Inclusion Metrics Working Group](https://github.com/chaoss/wg-diversity-inclusion)

# Technical Resources
## Git & GitHub
- [How to contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [GitHub's Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [GitHub's "Hello World" tutorial](https://guides.github.com/activities/hello-world/)
- [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/)
- [Commit message style guidelines](https://commit.style/)
- [No-nonsense Git reference](https://rogerdudler.github.io/git-guide/) (best to have a cursory understanding of Git before hand)
- [A Complete Guide to DCO for Open Source Developers](https://www.secondstate.io/articles/dco/)

## CHAOSS Slack Bot
- [CHAOSS Slack Bot documentation](https://docs.google.com/document/d/1NJd-nNKUNb3Q0lRb5cfmUU8kpRcYGjh-vPqpk4CCvic/edit?usp=sharing)

## Slack API & Bolt for JavaScript
- [Getting started with Bolt for JavaScript](https://slack.dev/bolt-js/tutorial/getting-started)
- [Slack API developer docs and guides](https://api.slack.com/docs)
- [Block Kit: A Clean and Consistent UI Framework for Slack Apps (allows you to drag and drop elements and copy the payload)](https://api.slack.com/block-kit)

## Testing
- [Official Jest documentation](https://jestjs.io/docs/getting-started)
- [Jest Tutorial for Beginners](https://www.valentinog.com/blog/jest/)
