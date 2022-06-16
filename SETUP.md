# Create an app
- First, we recommend [creating a new workspace](https://slack.com/get-started#create) where you won’t disrupt real work getting done.
- [Create a Slack app](https://api.slack.com/apps/new) and install it to the new workspace you created.
- Hit the ```Create App``` button and you’ll land on your app’s **Basic Information** page.
![](https://slack.dev/bolt-js/assets/basic-information-page.png)

# Tokens and installing app
- Navigate to the **OAuth & Permissions** on the left sidebar and scroll down to the **Bot Token Scopes** section. Click **Add an OAuth Scope**. CHAOSS Slack bot currently has these [OAuth Scopes](https://docs.google.com/document/d/1NJd-nNKUNb3Q0lRb5cfmUU8kpRcYGjh-vPqpk4CCvic/edit#heading=h.v1ah7sirde2a) enabled, so enable those for full functionality of the bot. If you're adding a new function, you might need more permissions. A comprehensive list of permission scopes is available at [api.slack.com/scopes](https://api.slack.com/scopes).
- Scroll up to the top of the OAuth & Permissions page and click **Install App to Workspace**. You’ll be led through Slack’s OAuth UI, where you should allow your app to be installed to your development workspace.
- Once you authorize the installation, you’ll land on the **OAuth & Permissions** page and see a **Bot User OAuth Access Token**.
![](https://slack.dev/bolt-js/assets/bot-token.png)
> Treat your token like a password and keep it safe. Your app uses it to post and retrieve information from Slack workspaces.

# Setting up your project
- Navigate to your project folder
```
$ cd chaoss-slack-bot
``` 
- Copy your Signing Secret from the Basic Information page and then store it in a new environment variable. 
- Copy your bot (xoxb) token from the OAuth & Permissions page and store it in another environment variable.

**For Linux and macOS:**
```
$ export SLACK_SIGNING_SECRET=<your-signing-secret>
```
```
$ export SLACK_BOT_TOKEN=xoxb-<your-bot-token>
```

**For Windows:**

Create a new file in the root of your project, and name it ```.env```. Copy the content of the  [.env.example](https://github.com/chaoss/chaoss-slack-bot/blob/main/.env.example) file and paste into your .env file. Insert your tokens into the quotes. Make sure you include the .env file in your [```.gitignore```](https://www.delftstack.com/howto/git/add-file-to-gitignore/) file, to avoid exposing your secret keys.

# Setting up events
To listen for events happening in a Slack workspace (like when a message is posted or when a reaction is posted to a message) you’ll use the Events API to subscribe to event types.
CHAOSS Slack Bot uses Socket Mode.
- Head to your app’s configuration page (click on the app from your [app management page](https://api.slack.com/apps)). Navigate to Socket Mode on the left side menu and toggle to enable.
- Go to **Basic Information** and scroll down under the App Token section and click **Generate Token and Scopes** to generate an app token. Add the ```connections:write``` scope to this token and save the generated xapp token.
- Scroll down to **Subscribe to Bot Events** and select the events you want your bot to listen to. CHAOSS Slack Bot currently subcribes to [these events](https://docs.google.com/document/d/1NJd-nNKUNb3Q0lRb5cfmUU8kpRcYGjh-vPqpk4CCvic/edit#heading=h.vaz3oyzblsm7). The other available events are documented at [api.slack.com/events](api.slack.com/events).

- Follow the rest of the instructions in the [CONTRIBUTING.md](https://github.com/chaoss/chaoss-slack-bot/blob/main/CONTRIBUTING.md). 

# Attribution
Adapted from [Getting started with Bolt for JavaScript](https://slack.dev/bolt-js/tutorial/getting-started).
