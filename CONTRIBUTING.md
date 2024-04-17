# Introduction
Welcome! (i mirëpritur; welkom; bienvenue; benvenuto; witamy; bienvenidos; 欢迎 أهلا بك; ようこそ; 환영; chào mừng; soo dhawow; karibu; Taŋyáŋ yahípi; Ẹ káàbọ̀; ndewo; barka da zuwa) and thank you for checking us out!

Following these guidelines helps to communicate that you respect the time of the people managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

CHAOSS Slack Bot is an open source project and we love to receive contributions from our community — you! There are many ways to contribute, from improving the documentation, submitting bug reports and feature requests or writing code which can be incorporated into CHAOSS Slack Bot itself.

We follow the standard Git workflow of fork -> change -> pull request -> merge -> update fork -> change ... (repeat forever). If you are new to open source, we recommend GitHub's excellent guide on "How to Contribute to Open Source". In addition, please feel free to reach out to any of the maintainers or other community members if you are struggling; we are here to help you learn!

## Adding or editing wiki pages locally
Wikis are part of Git repositories, so you can make changes locally and push them to your repository using a Git workflow.

### Cloning wikis to your computer
Every wiki provides an easy way to clone its contents down to your computer. Once you've created an initial page on GitHub, you can clone the repository to your computer with the provided URL:

```
$ git clone https://github.com/chaoss/chaoss-slack-bot.wiki.git 
# Clones the wiki locally
```
Once you have cloned the wiki, you can add new files, edit existing ones, and commit your changes. You and your collaborators can create branches when working on wikis, but only changes pushed to the default branch will be made live and available to your readers.

## About wiki 
The filename determines the title of your wiki page, and the file extension determines how your wiki content is rendered.

Wikis use our [open-source Markup library](https://github.com/github/markup) to convert the markup, and it determines which converter to use by a file's extension. For example, if you name a file foo.md or foo.markdown, wiki will use the Markdown converter, while a file named foo.textile will use the Textile converter.

Don't use the following characters in your wiki page's titles: ```\ / : * ? " < > |```. Users on certain operating systems won't be able to work with filenames containing these characters. Be sure to write your content using a markup language that matches the extension, or your content won't render properly.

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
