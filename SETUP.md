# Create an App

*   First, we recommend [creating a new workspace](https://slack.com/get-started#create) where you won’t disrupt real work getting done.

*   [Create a Slack app](https://api.slack.com/apps/new) and install it to the new workspace you created.
*   After clicking a create a Slack app two options should appear
*   ![image](https://github.com/ise8933/chaoss-slack-bot/assets/90360951/e085ea5b-b98d-47cc-8c2d-c1563fddf88b)

* 

*   Click on the `Create App` button to go to the **Basic Information** page.
    ![](https://slack.dev/bolt-js/assets/basic-information-page.png)

# Tokens and installing app

*   Navigate to the **OAuth & Permissions** on the left sidebar.
    ![image](https://github.com/peculiaruc/peculiaruc.github.io/assets/35475543/07be85b8-7b28-4691-aab6-7d847b35c18e)

*   Scroll down to the **Bot Token Scopes** section. Click **Add an OAuth Scope**.
    ![image](https://github.com/peculiaruc/peculiaruc.github.io/assets/35475543/ed6d3dfb-4831-4b43-8b09-15cd7f3445b2) ![image](https://github.com/peculiaruc/peculiaruc.github.io/assets/35475543/ff3dda77-f205-4e95-8694-9e3d16594c36)

The bot currently has these [OAuth Scopes](https://github.com/chaoss/chaoss-slack-bot/wiki/Bot-Token-Scopes-&-Event-Subscriptions) enabled, so enable those for full functionality of the bot. If you're adding a new function, you might need more permissions. See the set up for adding new functions below.

A comprehensive list of permission scopes is available at [api.slack.com/scopes](https://api.slack.com/scopes).

*   Scroll up to the top of the OAuth & Permissions page and click **Install App to Workspace**.
    ![image](https://github.com/peculiaruc/peculiaruc.github.io/assets/35475543/550938ed-48f4-4296-9d73-0a3431f30182)
    You’ll be led through Slack’s OAuth UI, where you should allow your app to be installed to your development workspace. See sample below.
    ![image](https://github.com/peculiaruc/peculiaruc.github.io/assets/35475543/be6977a7-ec87-4d42-b0fc-bcf09d04474c)

    Click on 'Allow' to confirm that the intallation was successful done on the Slack platform.

    ![image](https://github.com/peculiaruc/peculiaruc.github.io/assets/35475543/6fc1643c-53a8-4b02-b3a7-bb84f2dfc046)

    The slack bot will appear on the side bar of your slack app
    ![image](https://github.com/peculiaruc/peculiaruc.github.io/assets/35475543/3eab21ff-2dbc-4640-81de-245123ac265a)

*   Once you authorize the installation, you will be led to  **OAuth & Permissions** page and see a **Bot User OAuth Access Token**.
    ![](https://slack.dev/bolt-js/assets/bot-token.png)

> Treat your token like a password and keep it safe. Your app uses it to post and retrieve information from Slack workspaces.

# Setting up your project

*   Navigate to your project folder

```

$ cd chaoss-slack-bot

```

*   Copy your Signing Secret from the Basic Information page and then store it in a new environment variable.
*   Copy your bot (xoxb) token from the OAuth & Permissions page and store it in another environment variable.

**For Linux and macOS:**

```
    $ export SLACK_SIGNING_SECRET=<your-signing-secret>

```

```
    $ export SLACK_BOT_TOKEN=xoxb-<your-bot-token>

```

**For Windows:**

*   Create a new  `.env ` file in the root of your project.
*   Copy the content of the  [.env.example](https://github.com/chaoss/chaoss-slack-bot/blob/main/.env.example) file and paste in the new .env file you created.
*   Insert your tokens into the quotes. Make sure you include the .env file in your [`.gitignore`](https://www.delftstack.com/howto/git/add-file-to-gitignore/) file, to avoid exposing your secret keys.

# Setting up events

To listen for events happening in a Slack workspace (like when a message is posted or when a reaction is posted to a message) you’ll use the Events API to subscribe to event types.
CHAOSS Slack Bot uses Socket Mode.

*   Head to your app’s configuration page (click on the app from your [app management page](https://api.slack.com/apps)). Navigate to Socket Mode on the left side menu and toggle to enable.

*   Go to **Basic Information** and scroll down under the App Token section and click **Generate Token and Scopes** to generate an app token. Add the `connections:write` scope to this token and save the generated xapp token.

*   Scroll down to **Subscribe to Bot Events** and select the events you want your bot to listen to. CHAOSS Slack Bot currently subcribes to [these events](https://docs.google.com/document/d/1NJd-nNKUNb3Q0lRb5cfmUU8kpRcYGjh-vPqpk4CCvic/edit#heading=h.vaz3oyzblsm7). The other available events are documented at [api.slack.com/events](api.slack.com/events).

*   Follow the rest of the instructions in the [CONTRIBUTING.md](https://github.com/chaoss/chaoss-slack-bot/blob/main/CONTRIBUTING.md).

# Adding New Function

After creating your app, you will see the options to add new function to your app.

![image](https://github.com/peculiaruc/peculiaruc.github.io/assets/35475543/40c56a46-4c68-4de7-a4ae-e35fddbce4d7)

*   Select from the function you want to add from the list of feature provided and follow the prompt.
*   Example:
    ![image](https://github.com/peculiaruc/peculiaruc.github.io/assets/35475543/3462851d-7ccd-476e-9c3d-f0dcaa7d7458)

# Attribution

Adapted from [Getting started with Bolt for JavaScript](https://slack.dev/bolt-js/tutorial/getting-started).
