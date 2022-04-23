const { App } = require('@slack/bolt');

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

// When a user joins the team, the bot sends a DM to the newcommer asking them how they would like to contribute

app.event('team_join', async ({ event, client, logger }) => {
  try {
    const result = await client.chat.postMessage({
      channel: event.user.id,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `Welcome to *CHAOSS Community* <@${event.user.id}>! 🎉How would you like to get started? \n\nI want to..`,
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '*Develop Metrics*',
          },
          accessory: {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Choose',
              emoji: true,
            },

            action_id: 'develop',
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '*Join Meeting*',
          },
          accessory: {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Choose',
              emoji: true,
            },

            action_id: 'joinMeet',
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '*Contribute or Review Code*',
          },
          accessory: {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Choose',
              emoji: true,
            },

            action_id: 'contribute',
          },
        },
      ],
      text: `Welcome to the team, <@${event.user.id}>! 🎉.`,
    });
    logger.info(result);
  } catch (error) {
    logger.error(error);
  }
});

// handle the button click  and shows the responses
app.action('develop', async ({ body, ack, say }) => {
  await ack();
  await say(
    `There are 5 Working Groups that develop metrics based on different aspects of open source community health: Risk, Value, Evolution, DEI, and Common.  More information about each of these groups can be found here: <https://handbook.chaoss.community/community-handbook/community-initiatives/working-groups> and the metrics are developed during our Working Group meetings.
    `
  );
});

app.action('joinMeet', async ({ body, ack, say }) => {
  // Acknowledge the action
  await ack();
  await say(
    `All CHAOSS meetings are open to everyone, and they happen virtually at  <https://zoom.us/my/chaoss> We recommend a good first meeting is our Weekly Community Call (Every Tuesday at 11:00 am US Central/Chicago time) but you can see a calendar of all our meetings at https://chaoss.community/participate.
    `
  );
});
app.action('contribute', async ({ body, ack, say }) => {
  // Acknowledge the action
  await ack();
  await say(
    `You are welcome to contribute. All CHAOSS meetings are open to everyone, and they happen virtually at  <https://zoom.us/my/chaoss> We recommend a good first meeting is our Weekly Community Call (Every Tuesday at 11:00 am US Central/Chicago time) but you can see a calendar of all our meetings at https://chaoss.community/participate.
    `
  );
});

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

// welcomes a new member to the newcomer channel
const channelId = 'C03AS6X6RJS';

// When a user joins the team, send a message in a predefined channel asking them to introduce themselves
app.event('team_join', async ({ event, client, logger }) => {
  try {
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
