const { App } = require("@slack/bolt");
const newbie = require("./components/newbie");
const theActions = require("./components/actions/actionResponses");
const mentorshipAction = require("./components/actions/mentorshipAction");
const mentorshipResponses = require("./components/actions/mentorshipResponses");

const memberJoinChannel = require("./components/joinChannel");

const outreachyPrompt = require("./components/outreachyPrompt");
const joinTeam = require("./components/joinTeam");

const dotenv = require("dotenv");

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

// handle the button click and show the responses
app.action("develop", async ({ ack, say }) => {
	await ack();
	theActions.develop(say);
});

app.action("joinMeet", async ({ ack, say }) => {
	// Acknowledge the action
	await ack();
	theActions.joinMeet(say);
});

app.action("contribute", async ({ ack, say }) => {
	// Acknowledge the action
	await ack();
	theActions.contribute(say);
});

app.action("helpWithWebsite", async ({ ack, say }) => {
	await ack();
	theActions.helpWithWebsite(say);
});

app.action("docs", async ({ ack, say }) => {
	await ack();
	theActions.docs(say);
});

app.action("mentorship", async ({ ack, say }) => {
	await ack();
	mentorshipAction.mentorship(say);
});

// this handler is for the nested radio buttons above
app.action("mentorship_selection", async ({ action, ack, say }) => {
	await ack();
	console.log(action.selected_option.value);
	if (action.selected_option.value === "outreachy") {
		mentorshipResponses.outreachy(say);
	}
	if (action.selected_option.value === "gsoc") {
		mentorshipResponses.gsoc(say);
	}
	if (action.selected_option.value === "gsod") {
		mentorshipResponses.gsod(say);
	}
});

app.action("implement_metrics", async ({ ack, say }) => {
	await ack();
	theActions.implement_metrics(say);
});

app.action("learn_something_else", async ({ ack, say }) => {
	await ack();
	theActions.learn_something_else(say);
});

// *****************PROJECTBOT CHANNEL FOR TESTING****************************/

app.event("member_joined_channel", async ({ event, client, logger }) => {
	memberJoinChannel.memberJoin(event, client, logger);
});

//****************************************** */

// When a user joins the team, the bot sends a DM to the newcommer asking them how they would like to contribute
app.event("team_join", async ({ event, client, logger }) => {
	joinTeam.joinTeamSlack(event, client, logger);
});

//*************************************************************** */

// *************Send message about outreachy**********/
app.message(/outreachy/i, async ({ message, say, logger }) => {
	outreachyPrompt.outreachyMessage(message, say, logger);
});

//******************************************************* */
// app.message(/hello|hey|hi/i, async ({ message, say }) => {
//   await say(`Hello there <@${message.user}>!`);
// });

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
        text: ` Hello there! We recently launched a community survey to get your feedback on how to make our community more welcoming and inclusive. If you have considered yourself part of the community, we would love you to share your thoughts and experiences by completing this survey.  
Thank you!`,
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

	console.log("⚡️ Bolt app is running!");
})();
