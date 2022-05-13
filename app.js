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

// ********************************NEWBIES*********/
app.message(/newbie/i, async ({ client, message, logger }) => {
  try {
    const result = await client.chat.postMessage({
      channel: message.user,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `Welcome to *CHAOSS Community* <@${message.user}>! 🎉How would you like to get started? \n\nI want to..`,
          },
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Develop Metrics',
                emoji: true,
              },
              style: 'primary',
              value: 'develop',
              action_id: 'new_develop',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Join a Meeting',
                emoji: true,
              },
              style: 'primary',
              value: 'joinMeet',
              action_id: 'new_joinMeet',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Contribute or Review Code',
                emoji: true,
              },
              style: 'primary',
              value: 'contribute',
              action_id: 'new_contribute',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Help with the Website',
                emoji: true,
              },
              style: 'primary',
              value: 'website',
              action_id: 'new_helpWithWebsite',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Write or Edit Documentation',
                emoji: true,
              },
              style: 'primary',
              value: 'docs',
              action_id: 'new_docs',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Contribute through a Mentorship Program',
                emoji: true,
              },
              style: 'primary',
              value: 'mentorship',
              action_id: 'new_mentorship',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Implement Metrics in my Project',
                emoji: true,
              },
              style: 'primary',
              value: 'implement_metrics',
              action_id: 'new_implement_metrics',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Learn About Something Else',
                emoji: true,
              },
              style: 'primary',
              value: 'learn_something_else',
              action_id: 'new_learn_something_else',
            },
          ],
        },
      ],
      text: `Welcome to the team, <@${message.user}>! 🎉.`,
    });
    logger.info(result);
  } catch (error) {
    logger.error(error);
  }
});

// handle the button click and show the responses
app.action('new_develop', async ({ ack, say }) => {
  await ack();
  await say(
    `You clicked *Develop Metrics* \n
    There are 5 Working Groups that develop metrics based on different aspects of open source community health: Risk, Value, Evolution, DEI, and Common.  More information about each of these groups can be found here: <https://handbook.chaoss.community/community-handbook/community-initiatives/working-groups> and the metrics are developed during our Working Group meetings.
    `
  );
});

app.action('new_joinMeet', async ({ ack, say }) => {
  // Acknowledge the action
  await ack();
  await say(
    `You clicked *Join Meeting*\n
    All CHAOSS meetings are open to everyone, and they happen virtually at  <https://zoom.us/my/chaoss> We recommend a good first meeting is our Weekly Community Call (Every Tuesday at 11:00 am US Central/Chicago time) but you can see a calendar of all our meetings at https://chaoss.community/participate.
    `
  );
});

app.action('new_contribute', async ({ ack, say }) => {
  // Acknowledge the action
  await ack();
  await say(
    `You clicked *Contribute or Review code*\n
    You are welcome to contribute. Please see this documentation: https://handbook.chaoss.community/community-handbook/contributing/development.
    `
  );
});

app.action('new_helpWithWebsite', async ({ ack, say }) => {
  await ack();
  await say(
    `You clicked *Help with the Website*\n first step is getting to know our community! You can connect with us in any of the ways described in our Participate page here: https://chaoss.community/participate.
    `
  );
});

app.action('new_docs', async ({ ack, say }) => {
  await ack();
  await say(
    `You clicked *Write or Edit Documentation*\n
    Please see this documentation: https://handbook.chaoss.community/community-handbook/contributing/documentation.
    `
  );
});

app.action('new_mentorship', async ({ ack, say }) => {
  await ack();
  await say({
    // Choosing "Contribute through a mentorship program" triggers these nested radio buttons
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'Which mentorship program are you interested in?',
        },
        accessory: {
          type: 'radio_buttons',
          options: [
            {
              text: {
                type: 'plain_text',
                text: '*Outreachy*',
                emoji: true,
              },
              value: 'new_outreachy',
            },
            {
              text: {
                type: 'plain_text',
                text: '*Google Summer of Code*',
                emoji: true,
              },
              value: 'new_gsoc',
            },
            {
              text: {
                type: 'plain_text',
                text: '*Google Season of Docs*',
                emoji: true,
              },
              value: 'new_gsod',
            },
          ],
          action_id: 'new_mentorship_selection',
        },
      },
    ],
    text: 'Which mentorship program are you interested in?',
  });
});

// this handler is for the nested radio buttons above
app.action('new_mentorship_selection', async ({ action, ack, say }) => {
  await ack();
  // console.log(action.selected_option.value);
  if (action.selected_option.value === 'new_outreachy') {
    await say(
      `You clicked *Outreachy*\n
      The Outreachy Application period has ended for our participation in this program this year. You can still join the CHAOSS community in any of the ways found on our Participate page here: https://chaoss.community/participate.`
    );
  }
  if (action.selected_option.value === 'new_gsoc') {
    await say(
      `You clicked *Google Summer of Code*\n
      The Google Summer of Code Application period has ended for our participation in this program this year. You can still join the CHAOSS community in any of the ways found on our Participate page here: https://chaoss.community/participate.`
    );
  }
  if (action.selected_option.value === 'new_gsod') {
    await say(
      `You clicked *Google Season of Docs*\n
      Welcome! If you haven't yet, please join the <#C03C239HN1F> Slack channel and take note of the pinned item at the top of the channel for more information about next steps.`
    );
  }
});

app.action('new_implement_metrics', async ({ ack, say }) => {
  await ack();
  await say(
    `You clicked *Implement Metrics in my Project*\n
    We encourage you to join one of our Working Groups for specific questions about implementing your metrics. You can read more about them here: https://handbook.chaoss.community/community-handbook/community-initiatives/working-groups.`
  );
});

app.action('new_learn_something_else', async ({ ack, say }) => {
  await ack();
  await say(
    `You clicked *Learn About Something Else*\n
    We encourage you to read through our Community Handbook: https://handbook.chaoss.community/community-handbook/, and if you still can't find what you're looking for, feel free to ask your question in our #newcomers slack channel.`
  );
});
// *****************PROJECTBOT CHANNEL FOR TESTING****************************/

const testChannel = 'C03D3L8TNMD';
app.event('member_joined_channel', async ({ event, client, logger }) => {
  try {
    const result = await client.chat.postMessage({
      channel: testChannel,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `Welcome to *CHAOSS Community* <@${event.user}>! 🎉How would you like to get started? \n\nI want to..`,
          },
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Develop Metrics',
                emoji: true,
              },
              style: 'primary',
              value: 'develop',
              action_id: 'mem_develop',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Join a Meeting',
                emoji: true,
              },
              style: 'primary',
              value: 'joinMeet',
              action_id: 'mem_joinMeet',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Contribute or Review Code',
                emoji: true,
              },
              style: 'primary',
              value: 'contribute',
              action_id: 'mem_contribute',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Help with the Website',
                emoji: true,
              },
              style: 'primary',
              value: 'website',
              action_id: 'mem_helpWithWebsite',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Write or Edit Documentation',
                emoji: true,
              },
              style: 'primary',
              value: 'docs',
              action_id: 'mem_docs',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Contribute through a Mentorship Program',
                emoji: true,
              },
              style: 'primary',
              value: 'mentorship',
              action_id: 'mem_mentorship',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Implement Metrics in my Project',
                emoji: true,
              },
              style: 'primary',
              value: 'implement_metrics',
              action_id: 'mem_implement_metrics',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Learn About Something Else',
                emoji: true,
              },
              style: 'primary',
              value: 'learn_something_else',
              action_id: 'mem_learn_something_else',
            },
          ],
        },
      ],
      text: `Welcome to the team, <@${event.user}>! 🎉.`,
    });
    logger.info(result);
  } catch (error) {
    logger.error(error);
  }
});

// handle the button click and show the responses
app.action('mem_develop', async ({ ack, say }) => {
  await ack();
  await say(
    `You clicked *Develop Metrics* \n There are 5 Working Groups that develop metrics based on different aspects of open source community health: Risk, Value, Evolution, DEI, and Common.  More information about each of these groups can be found here: <https://handbook.chaoss.community/community-handbook/community-initiatives/working-groups> and the metrics are developed during our Working Group meetings.
    `
  );
});

app.action('mem_joinMeet', async ({ ack, say }) => {
  // Acknowledge the action
  await ack();
  await say(
    `You clicked *Join Meeting*\n
    All CHAOSS meetings are open to everyone, and they happen virtually at  <https://zoom.us/my/chaoss> We recommend a good first meeting is our Weekly Community Call (Every Tuesday at 11:00 am US Central/Chicago time) but you can see a calendar of all our meetings at https://chaoss.community/participate.
    `
  );
});

app.action('mem_contribute', async ({ ack, say }) => {
  // Acknowledge the action
  await ack();
  await say(
    `You clicked *Contribute or Review code*\n You are welcome to contribute. Please see this documentation: https://handbook.chaoss.community/community-handbook/contributing/development.
    `
  );
});

app.action('mem_helpWithWebsite', async ({ ack, say }) => {
  await ack();
  await say(
    `You clicked *Help with the Website*\n first step is getting to know our community! You can connect with us in any of the ways described in our Participate page here: https://chaoss.community/participate.
    `
  );
});

app.action('mem_docs', async ({ ack, say }) => {
  await ack();
  await say(
    `You clicked *Write or Edit Documentation*\n
    Please see this documentation: https://handbook.chaoss.community/community-handbook/contributing/documentation.
    `
  );
});

app.action('mem_mentorship', async ({ ack, say }) => {
  await ack();
  await say({
    // Choosing "Contribute through a mentorship program" triggers these nested radio buttons
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'Which mentorship program are you interested in?',
        },
        accessory: {
          type: 'radio_buttons',
          options: [
            {
              text: {
                type: 'plain_text',
                text: '*Outreachy*',
                emoji: true,
              },
              value: 'outreachy',
            },
            {
              text: {
                type: 'plain_text',
                text: '*Google Summer of Code*',
                emoji: true,
              },
              value: 'gsoc',
            },
            {
              text: {
                type: 'plain_text',
                text: '*Google Season of Docs*',
                emoji: true,
              },
              value: 'gsod',
            },
          ],
          action_id: 'mem_mentorship_selection',
        },
      },
    ],
    text: 'Which mentorship program are you interested in?',
  });
});

// this handler is for the nested radio buttons above
app.action('mem_mentorship_selection', async ({ action, ack, say }) => {
  await ack();
  console.log(action.selected_option.value);
  if (action.selected_option.value === 'outreachy') {
    await say(
      `You clicked *Outreachy*\n
      The Outreachy Application period has ended for our participation in this program this year. You can still join the CHAOSS community in any of the ways found on our Participate page here: https://chaoss.community/participate.`
    );
  }
  if (action.selected_option.value === 'gsoc') {
    await say(
      `You clicked *Google Summer of Code*\n
      The Google Summer of Code Application period has ended for our participation in this program this year. You can still join the CHAOSS community in any of the ways found on our Participate page here: https://chaoss.community/participate.`
    );
  }
  if (action.selected_option.value === 'gsod') {
    await say(
      `You clicked *Google Season of Docs*\n
      Welcome! If you haven't yet, please join the <#C03C239HN1F> Slack channel and take note of the pinned item at the top of the channel for more information about next steps.`
    );
  }
});

app.action('mem_implement_metrics', async ({ ack, say }) => {
  await ack();
  await say(
    `You clicked *Implement Metrics in my Project*\n
    We encourage you to join one of our Working Groups for specific questions about implementing your metrics. You can read more about them here: https://handbook.chaoss.community/community-handbook/community-initiatives/working-groups.`
  );
});

app.action('mem_learn_something_else', async ({ ack, say }) => {
  await ack();
  await say(
    `You clicked *Learn About Something Else*\n
    We encourage you to read through our Community Handbook: https://handbook.chaoss.community/community-handbook/, and if you still can't find what you're looking for, feel free to ask your question in our #newcomers slack channel.`
  );
});

//****************************************** */

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
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Develop Metrics',
                emoji: true,
              },
              style: 'primary',
              value: 'develop',
              action_id: 'develop',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Join a Meeting',
                emoji: true,
              },
              style: 'primary',
              value: 'joinMeet',
              action_id: 'joinMeet',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Contribute or Review Code',
                emoji: true,
              },
              style: 'primary',
              value: 'contribute',
              action_id: 'contribute',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Help with the Website',
                emoji: true,
              },
              style: 'primary',
              value: 'website',
              action_id: 'helpWithWebsite',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Write or Edit Documentation',
                emoji: true,
              },
              style: 'primary',
              value: 'docs',
              action_id: 'docs',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Contribute through a Mentorship Program',
                emoji: true,
              },
              style: 'primary',
              value: 'mentorship',
              action_id: 'mentorship',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Implement Metrics in my Project',
                emoji: true,
              },
              style: 'primary',
              value: 'implement_metrics',
              action_id: 'implement_metrics',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Learn About Something Else',
                emoji: true,
              },
              style: 'primary',
              value: 'learn_something_else',
              action_id: 'learn_something_else',
            },
          ],
        },
      ],
      text: `Welcome to the team, <@${event.user.id}>! 🎉.`,
    });
    logger.info(result);
  } catch (error) {
    logger.error(error);
  }
});

// handle the button click and show the responses
app.action('develop', async ({ ack, say }) => {
  await ack();
  await say(
    `You clicked *Develop Metrics*\n
    There are 5 Working Groups that develop metrics based on different aspects of open source community health: Risk, Value, Evolution, DEI, and Common.  More information about each of these groups can be found here: <https://handbook.chaoss.community/community-handbook/community-initiatives/working-groups> and the metrics are developed during our Working Group meetings.
    `
  );
});

app.action('joinMeet', async ({ ack, say }) => {
  // Acknowledge the action
  await ack();
  await say(
    `You clicked *Join Meeting*\n
    All CHAOSS meetings are open to everyone, and they happen virtually at  <https://zoom.us/my/chaoss> We recommend a good first meeting is our Weekly Community Call (Every Tuesday at 11:00 am US Central/Chicago time) but you can see a calendar of all our meetings at https://chaoss.community/participate.
    `
  );
});

app.action('contribute', async ({ ack, say }) => {
  // Acknowledge the action
  await ack();
  await say(
    `You clicked *Contribute or Review code*\n
    You are welcome to contribute. Please see this documentation: https://handbook.chaoss.community/community-handbook/contributing/development.
    `
  );
});

app.action('helpWithWebsite', async ({ ack, say }) => {
  await ack();
  await say(
    `You clicked *Help with the Website*\n
    The first step is getting to know our community! You can connect with us in any of the ways described in our Participate page here: https://chaoss.community/participate.
    `
  );
});

app.action('docs', async ({ ack, say }) => {
  await ack();
  await say(
    `
    You clicked *Write or Edit Documentation*\n
    Please see this documentation: https://handbook.chaoss.community/community-handbook/contributing/documentation.
    `
  );
});

app.action('mentorship', async ({ ack, say }) => {
  await ack();
  await say({
    // Choosing "Contribute through a mentorship program" triggers these nested radio buttons
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'Which mentorship program are you interested in?',
        },
        accessory: {
          type: 'radio_buttons',
          options: [
            {
              text: {
                type: 'plain_text',
                text: '*Outreachy*',
                emoji: true,
              },
              value: 'outreachy',
            },
            {
              text: {
                type: 'plain_text',
                text: '*Google Summer of Code*',
                emoji: true,
              },
              value: 'gsoc',
            },
            {
              text: {
                type: 'plain_text',
                text: '*Google Season of Docs*',
                emoji: true,
              },
              value: 'gsod',
            },
          ],
          action_id: 'mentorship_selection',
        },
      },
    ],
    text: 'Which mentorship program are you interested in?',
  });
});

// this handler is for the nested radio buttons above
app.action('mentorship_selection', async ({ action, ack, say }) => {
  await ack();
  console.log(action.selected_option.value);
  if (action.selected_option.value === 'outreachy') {
    await say(
      `You clicked *Outreachy*\n
      The Outreachy Application period has ended for our participation in this program this year. You can still join the CHAOSS community in any of the ways found on our Participate page here: https://chaoss.community/participate.`
    );
  }
  if (action.selected_option.value === 'gsoc') {
    await say(
      `You clicked *Google Summer of Code*\n
      The Google Summer of Code Application period has ended for our participation in this program this year. You can still join the CHAOSS community in any of the ways found on our Participate page here: https://chaoss.community/participate.`
    );
  }
  if (action.selected_option.value === 'gsod') {
    await say(
      `You clicked *Google Season of Docs*\n
      Welcome! If you haven't yet, please join the <#C03C239HN1F> Slack channel and take note of the pinned item at the top of the channel for more information about next steps.`
    );
  }
});

app.action('implement_metrics', async ({ ack, say }) => {
  await ack();
  await say(
    `You clicked *Implement Metrics*\n
    We encourage you to join one of our Working Groups for specific questions about implementing your metrics. You can read more about them here: https://handbook.chaoss.community/community-handbook/community-initiatives/working-groups.`
  );
});

app.action('learn_something_else', async ({ ack, say }) => {
  await ack();
  await say(
    `You clicked *Learn About Something Else*\n
    We encourage you to read through our Community Handbook: https://handbook.chaoss.community/community-handbook/, and if you still can't find what you're looking for, feel free to ask your question in our #newcomers slack channel.`
  );
});

//*************************************************************** */

// *************Send message about outreachy**********/
app.message(/outreachy/i, async ({ message, say, logger }) => {
  try {
    const result = await say({
      channel: message.user,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `Hello <@${message.user}>! 🎉, Thanks so much for your interest in CHAOSS too! As many of you know, we have two potential projects and but funding for only one person. You can find the projects at:\n
            <https://www.outreachy.org/apply/project-selection/#chaoss>
            We spent some time to consolidate questions and answers for you. In response, we have made two very clear issues to demonstrate what we would like from you to help us better understand and gauge your interest. You can find them in the following issues:\n
            <https://github.com/chaoss/community/issues/312> (Conversion Rate)\n
            <https://github.com/chaoss/community/issues/311> (Documentation Inclusivity)`,
          },
        },
      ],
      text: `Welcome to the team, <@${message.user}>! 🎉.`,
    });
    logger.info(result);
  } catch (error) {
    logger.error(error);
  }
});

//******************************************************* */
// app.message(/hello|hey|hi/i, async ({ message, say }) => {
//   await say(`Hello there <@${message.user}>!`);
// });

// welcomes a new member to the newcomer channel
/*const channelId = 'C03D3L8TNMDoo'; //for testing purposes it welcomes to #projectbot channel

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
*/
// *************************************** DIRECT MESSAGE - ONE TIME  ANNOUNCEMENT TO INTRODUCE THE BOT************/
/*
let usersStore = {};

app.message('intro-CHAOSS', async ({ client, logger }) => {
  // Call the users.list method using the WebClient
  const result = await client.users.list();
  saveUsers(result.members);
  try {
    for (let i = 0; i < userId.length; i++) {
      await client.chat.postMessage({
        channel: userId[i],
        text: `Hello, I'm CHAOSS BOT! I am a simple bot. I am here to welcome newcomers. If you need more information about CHAOSS, you can type in 'newbie' in the <#C0207C3RETX> channel and I will show you around.`,
      });
    }
  } catch (error) {
    logger.error(error);
  }
});

// Put users into the JavaScript object
let userId = [];

function saveUsers(usersArray) {
  usersArray.forEach(function (user) {
    // Key user info on their unique user ID
    userId.push(user['id']);

    // Store the entire user object (you may not need all of the info)
    usersStore[userId] = user;
    // console.log(userId);
  });
}
*/
//************ */
(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
