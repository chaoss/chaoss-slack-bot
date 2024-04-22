const { App } = require('@slack/bolt');
const newbie = require('./components/newbie');
const theActions = require('./components/actions/actionResponses');
const mentorshipAction = require('./components/actions/mentorshipAction');
const mentorshipResponses = require('./components/actions/mentorshipResponses');
const outreachyPrompt = require('./components/outreachyPrompt');

const joinChaossAfrica = require('./components/chaossAfrica/joinChaossAfrica');
const chaossAfrica = require('./components/chaossAfrica/africa');

const joinTeam = require('./components/joinTeam');
const memberJoinChannel = require('./components/joinChannel');
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
//This responds to a member when they  type newbie in any channel where the bot is present
app.message(/newbie/i, async ({ message, client, logger }) => {
  newbie.newHere(message, client, logger);
});

//This responds to a member when they  type africa in any channel where the bot is present
app.message(/africa-info/i, async ({ message, client, logger }) => {
  chaossAfrica.chaossAfrica(message, client, logger);
});

// handle the button click and show the responses
app.action('develop', async ({ ack, say }) => {
  await ack();
  theActions.develop(say);
});

app.action('joinMeet', async ({ ack, say }) => {
  // Acknowledge the action
  await ack();
  theActions.joinMeet(say);
});

app.action('contribute', async ({ ack, say }) => {
  // Acknowledge the action
  await ack();
  theActions.contribute(say);
});

app.action('helpWithWebsite', async ({ ack, say }) => {
  await ack();
  theActions.helpWithWebsite(say);
});

app.action('docs', async ({ ack, say }) => {
  await ack();
  theActions.docs(say);
});

app.action('mentorship', async ({ ack, say }) => {
  await ack();
  mentorshipAction.mentorship(say);
});

// this handler is for the nested radio buttons above
app.action('mentorship_selection', async ({ action, ack, say }) => {
  await ack();
  console.log(action.selected_option.value);
  if (action.selected_option.value === 'outreachy') {
    mentorshipResponses.outreachy(say);
  }
  if (action.selected_option.value === 'gsoc') {
    mentorshipResponses.gsoc(say);
  }
  if (action.selected_option.value === 'gsod') {
    mentorshipResponses.gsod(say);
  }
});

app.action('implement_metrics', async ({ ack, say }) => {
  await ack();
  theActions.implement_metrics(say);
});

app.action('learn_something_else', async ({ ack, say }) => {
  await ack();
  theActions.learn_something_else(say);
});

app.action('faqs', async ({ ack, say }) => {
  await ack();
  theActions.faqs(say);
});
//****************************************** */

// When a user joins the team, the bot sends a DM to the newcommer asking them how they would like to contribute
app.event('team_join', async ({ event, client, logger }) => {
  joinTeam.joinTeamSlack(event, client, logger); // this is the function that sends the DM
  memberJoinChannel.memberJoin(event, client, logger); // this is for the #projectbot channel
});

//*********************************************************** */

// *******When a user join chaossafrica channel, the bot sends a welcome message and the goal of the community******//
app.event('member_joined_channel', async({ event, client, logger }) => { 
  joinChaossAfrica.joinChaossAfrica(event, client, logger) 
})

// ************************************************************************************************//

// *************Send message about outreachy**********/
app.message(/outreachy/i, async ({ message, say, logger }) => {
  outreachyPrompt.outreachyMessage(message, say, logger);
});

// *******************************DIRECT MESSAGE - ONE TIME  ANNOUNCEMENT TO INTRODUCE THE BOT************/
/*
let usersStore = {};

app.message('survey-CHAOSS', async ({ client, logger }) => {
  // Call the users.list method using the WebClient
  const result = await client.users.list();
  saveUsers(result.members);
  try {
    for (let i = 0; i < userId.length; i++) {
      await client.chat.postMessage({
        channel: userId[i],
        text: `Hello there! We recently launched a community survey to get your feedback on how to make our community more welcoming and inclusive. If you have considered yourself part of the community, we would love you to share your thoughts and experiences by completing this survey: https://chaossproject.limesurvey.net/835156?lang=en
 Thank you`,
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

async function deleteMessage(channel, ts) {
  try {
      const result = await app.client.chat.delete({
          channel: channel,
          ts: ts,
          token: process.env.DELETE_TOKEN, // Use the admin (user) token for this operation
      });
      //console.log(result);
      console.log("!! im delete bad msg !!");
  } catch (error) {
      console.error(error);
      if (error.data && error.data.error === 'cant_delete_message') {
          console.log('!! im dont perm for delete !!')
          console.log('!! pls make sure im DELETE_TOKEN correctly !!')
          console.log('!! user token should be workspace admin !!')
          console.log('!! user token should not be bot token !!')
          console.log('!! im dont perm for delete !!')
      } else {
          console.log("delete err generic.");
      }
  }
}

// async function talksWithHim(userId, message) {
//   try {
//     const result = await app.client.chat.postMessage({
//       channel: userId,
//       text: message,
//     });
//     //console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }


//bot sends message to the user directly if they are flagged
async function talksWithHim(channel, user, message, flaggedWord) {
  try {
    const result = await app.client.chat.postEphemeral({
      channel: channel,
      user: user,
      text: message,
      token: process.env.SLACK_BOT_TOKEN,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: message,
          },
          accessory: {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Learn More',
            },
            action_id: 'learn_more',
          },
        },
      ],
    });
    console.log("Ephemeral message sent:", result);
  } catch (error) {
    console.error("Failed to send ephemeral message:", error);
  }
}

const axios = require('axios');

let flaggedWord; // Global variable to store the flagged words

// Use a Map as a simple server-side cache
const definitionsCache = new Map();

app.action('learn_more', async ({ ack, body, context }) => {
  // Acknowledge the action
  await ack();

  // Create an array of promises
  const promises = flaggedWord.map(async word => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
      return { word, definitions: response.data[0].meanings.map(meaning => meaning.definitions[0].definition) };
    } catch (error) {
      console.error(`Failed to fetch definition for ${word}:`, error);
      return { word, error: error.message };
    }
  });

  // Wait for all promises to resolve
  const results = await Promise.all(promises);

  // Store the definitions in the cache
  definitionsCache.set(body.channel.id, { definitions: results[0].definitions, index: 0 });

  // Send the first definition and a button to request more
  await app.client.chat.postMessage({
    channel: body.channel.id,
    text: `*Definition 1*: ${results[0].definitions[0]}`,
    blocks: [{
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": `*Definition 1*: ${results[0].definitions[0]}`
      },
      "accessory": {
        "type": "button",
        "text": {
          "type": "plain_text",
          "text": "Show another definition"
        },
        "action_id": `definition_next`
      }
    }],
    token: context.botToken,
  });
});

// Handle button click
app.action('definition_next', async ({ ack, body, context }) => {
  // Acknowledge the action
  await ack();

  // Get the definitions and the current index from the cache
  const cache = definitionsCache.get(body.channel.id);
  const definitions = cache.definitions;
  const index = cache.index;

  // Check if there are more definitions
  if (index + 1 < definitions.length) {
    // Update the index in the cache
    definitionsCache.set(body.channel.id, { definitions, index: index + 1 });

    // Send the next definition
    await app.client.chat.postMessage({
      channel: body.channel.id,
      text: `*Definition ${index + 2}*: ${definitions[index + 1]}`,
      token: context.botToken,
    });
  } else {
    // Send a message saying "That's all"
    await app.client.chat.postMessage({
      channel: body.channel.id,
      text: `That's all.`,
      token: context.botToken,
    });
  }
});
let alex;

async function loadAlex() {
  alex = await import('alex');
}


loadAlex().then(() => {
  app.message(async ({ message, client, say }) => {
    if (!message.text && !message.file) {
      return; 
    }
    
    const checkMessage = async (user, channel, text, originalTimestamp, attempts = 1) => {
      const lowerText = text.toLowerCase(); 
      const alexCheck = alex.text(lowerText).messages;

      if (alexCheck.length > 0) { //insensitive words were found
        const reason = alexCheck.map(word => word.reason).join(", and ");
        flaggedWord = alexCheck.map(word => word.actual);
        
        // warn user that their message contains bad words
        setTimeout(async () => {
            talksWithHim(message.channel, user, `Your message "${text}" has been flagged. ${reason}. You have 1 minute to edit your message before it deletes. To do so, hover over your message, click the three dots, then click edit message.`);
        }, 1000);

        // wait 1 minute before checking the message again
        setTimeout(async () => {
          try {
            const history = await app.client.conversations.history({
              channel: channel,
              latest: originalTimestamp,
              inclusive: true,
              limit: 1,
              token: process.env.SLACK_BOT_TOKEN,
            });

            const currentMessage = history.messages[0];
            if (attempts >= 3) { // a set limit for editing the message to prevent infinite loops 
              deleteMessage(channel, originalTimestamp);
              talksWithHim(channel, user, "You didn't edit the message after several warnings. The message has been deleted.");
            } else if (currentMessage.text !== text) { // your original message has been edited 
              checkMessage(user, channel, currentMessage.text, originalTimestamp, attempts + 1); // check the message again for insensitive words
            } else { //message was flagged but not edited, so now it will be deleted
                deleteMessage(message.channel, message.ts);
                talksWithHim(message.channel, user, "You didn't edit the message before deletion. Please still retry by sending another message.");
            }
          } catch (error) {
            console.error("Error checking for message edit:", error);
          }
        }, 60000); // 1 minute wait
      } else if (attempts > 1) { // if the message has been edited and is now fine after finding insensitive words
        talksWithHim(channel, user, "You fixed it, thanks!");
      } 
    };

    // Initial call to check the message
    checkMessage(message.user, message.channel, message.text, message.ts);
  });
});


