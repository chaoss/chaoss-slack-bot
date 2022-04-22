const { App, subtype } = require('@slack/bolt');

const dotenv = require('dotenv');
dotenv.config();

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  port: process.env.PORT || 3000,
});


// When a user joins the team, send a message in the newcomer channel asking them how they would like to contribute
const newcomerChannelId = 'C03AS6X6RJS';

app.event('team_join', async ({ event, client, logger }) => {
  try {
    // Call chat.postMessage with the built-in client
    const result = await client.chat.postMessage({
      channel: newcomerChannelId,
      blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `Welcome to CHAOSS Community <@${event.user.id}>! 🎉How would you like to get started? \n\nI want to..`
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "Develop metrics"
            },
            accessory: {
              type: "button",
              text: {
                type: "plain_text",
                text: "Click Me",
                emoji: true
              },
              value: "develop_metrics",
              action_id: "develop_metrics"
            }
          },
          {
            type: "section",
            text: {
            type: "mrkdwn",
            text: "Join a meeting."
            },
            accessory: {
              type: "button",
              text: {
                type: "plain_text",
                text: "Click Me",
                emoji: true
              },
              value: "join_meeting",
              action_id: "join_meeting"
            }
          },
          {
            type: "section",
            text: {
            type: "mrkdwn",
            text: "Contribute or Review Code."
            },
            accessory: {
              type: "button",
              text: {
                type: "plain_text",
                text: "Click Me",
                emoji: true
              },
              value: "code",
              action_id: "code"
            }
          },
          {
            type: "section",
            text: {
            type: "mrkdwn",
            text: "Help with the Website."
            },
            accessory: {
              type: "button",
              text: {
                type: "plain_text",
                text: "Click Me",
                emoji: true
              },
              value: "website",
              action_id: "website"
            }
          },
          {
            type: "section",
            text: {
            type: "mrkdwn",
            text: "Write or Edit Documentation."
            },
            accessory: {
              type: "button",
              text: {
                type: "plain_text",
                text: "Click Me",
                emoji: true
              },
              value: "docs",
              action_id: "docs"
            }
          },
          {
            type: "section",
            text: {
            type: "mrkdwn",
            text: "Contribute through a Mentorship Program."
            },
            accessory: {
              type: "button",
              text: {
                type: "plain_text",
                text: "Click Me",
                emoji: true
              },
              value: "mentorship",
              action_id: "mentorship"
            }
          },
          {
            type: "section",
            text: {
            type: "mrkdwn",
            text: "Implement Metrics in my Project."
            },
            accessory: {
              type: "button",
              text: {
                type: "plain_text",
                text: "Click Me",
                emoji: true
              },
              value: "implement_metrics",
              action_id: "implement_metrics"
            }
          },
          {
            type: "section",
            text: {
            type: "mrkdwn",
            text: "Learn About Something Else."
            },
            accessory: {
              type: "button",
              text: {
                type: "plain_text",
                text: "Click Me",
                emoji: true
              },
              value: "learn_something_else",
              action_id: "learn_something_else"
            }
          },
          {
            type: "section",
            text: {
            type: "mrkdwn",
            text: "Just Hangin' Around."
            },
            accessory: {
              type: "button",
              text: {
                type: "plain_text",
                text: "Click Me",
                emoji: true
              },
              value: "just_hangin",
              action_id: "just_hangin"
            }
          },
      ],
      text: `Hey there <@${event.user.id}>!`,
    });
    logger.info(result);
  }
  catch (error) {
    logger.error(error);
  }
});

// handlers to respond to click events
app.action('develop_metrics', async ({ ack, event }) => {
  await ack();
  await say(`<@${event.user.id}> wants to develop metrics`);
});

app.action('join_meeting', async ({ ack, event }) => {
  await ack();
  await say(`<@${event.user.id}> wants to Join a Meeting`);
});


// Listen to incoming message containing hello
// app.message('hello', async ({ message, say }) => {
//   await say(`Whats up <@${message.user}>!`);
// });

app.message(/hello|hey|hi/i, async ({ message, say }) => {
  await say({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `Welcome to CHAOSS Community <@${message.user}>!`,
        },
        accessory: {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Click Me',
          },
          action_id: 'button_click',
        },
      },
    ],
    text: `Hey there <@${message.user}>!`,
  });
});

// handler to respond to click
app.action('button_click', async ({ body, ack, say }) => {
  // Acknowledge the action
  await ack();
  await say(`<@${body.user.id}> clicked the button`);
});

/*
const whenItsTime = '1649960121';

app.message('wake me up', async ({ message, client, logger }) => {
  try {
    // Call chat.scheduleMessage with the built-in client
    const result = await client.chat.scheduleMessage({
      channel: message.channel,
      post_at: whenItsTime,
      text: 'It is 5:10pm',
    });
  } catch (error) {
    logger.error(error);
  }
});
*/
// welcome newcomer to channel
const channelId = 'C03AJ5JUZ71';

// When a user joins the team, send a message in a predefined channel asking them to introduce themselves
app.event('team_join', async ({ event, client, logger }) => {
  try {
    // Call chat.postMessage with the built-in client
    console.log(event);
    const result = await client.chat.postMessage({
      channel: channelId,
      text: `Welcome to the team, <@${event.user.id}>! 🎉 You can introduce yourself in this channel.`,
    });
    logger.info(result);
  } catch (error) {
    logger.error(error);
  }
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
