const { App } = require("@slack/bolt");
const newbie = require("./components/newbie");
const theActions = require("./components/actions/actionResponses");
const mentorshipAction = require("./components/actions/mentorshipAction");
const mentorshipResponses = require("./components/actions/mentorshipResponses");
const outreachyPrompt = require("./components/outreachyPrompt");
const {
  chaossAfricaInfo,
  joinChaossAfrica,
} = require("./components/chaossAfrica");
const joinTeam = require("./components/joinTeam");
const memberJoinChannel = require("./components/joinChannel");
const {
  broadcastMessage,
  previewBroadcast,
} = require("./components/broadcast");
const { isWorkspaceOwner } = require("./utils/adminValidator");

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

//This responds to a member when they  type africa in any channel where the bot is present
app.message(/africa-info/i, async ({ message, client, logger }) => {
  chaossAfricaInfo(message, client, logger);
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
    mentorshipResponses.googleSummerOfCode(say);
  }
  if (action.selected_option.value === "gsod") {
    mentorshipResponses.googleSeasonOfDocs(say);
  }
});

app.action("implement_metrics", async ({ ack, say }) => {
  await ack();
  theActions.implement_metrics(say);
});

app.action("regional_chapters", async ({ ack, say }) => {
  await ack();
  theActions.regional_chapters(say);
});

app.action("learn_something_else", async ({ ack, say }) => {
  await ack();
  theActions.learn_something_else(say);
});

app.action("faqs", async ({ ack, say }) => {
  await ack();
  theActions.faqs(say);
});

app.action("newbie_advice", async ({ ack, say }) => {
  await ack();
  theActions.newbie_advice(say);
});

app.action("educational_materials", async ({ ack, say }) => {
  await ack();
  theActions.educational_materials(say);
});

//****************************************** */

// When a user joins the team, the bot sends a DM to the newcommer asking them how they would like to contribute
app.event("team_join", async ({ event, client, logger }) => {
  joinTeam.joinTeamSlack(event, client, logger); // this is the function that sends the DM
  memberJoinChannel.memberJoin(event, client, logger); // this is for the #projectbot channel
});

//*********************************************************** */

// *******When a user join chaossafrica channel, the bot sends a welcome message and the goal of the community******//
app.event("member_joined_channel", async ({ event, client, logger }) => {
  joinChaossAfrica(event, client, logger);
});

// *************Send message about outreachy**********/
app.message(/outreachy/i, async ({ message, say, logger }) => {
  outreachyPrompt.outreachyMessage(message, say, logger);
});

// *************Sends CHAOSS Meeting Notes Link**********/
const meetingNotesLink = process.env.MEETING_NOTES_LINK;

app.message(/(!meeting|!notes)/i, async ({ message, say }) => {
  if (!meetingNotesLink) {
    await say("The meeting notes link is currently unavailable.");
  } else {
    await say(`Here is the link to the meeting notes: <${meetingNotesLink}>`);
  }
});

// *************Sends Broadcast Message**********/
app.command(
  "/broadcast-preview",
  async ({ command, ack, client, logger, respond }) => {
    await ack();

    try {
      if (!command.text) {
        await respond({
          text: "Please provide a message to preview",
          response_type: "ephemeral",
        });
        return;
      }

      await previewBroadcast(client, logger, command.user_id, command.text);
      await respond({
        text: "Preview sent. Check your DMs to see how the message will look.",
        response_type: "ephemeral",
      });
    } catch (error) {
      await respond({
        text: "Failed to send preview. Please try again.",
        response_type: "ephemeral",
      });
      logger.error("Preview failed:", error);
    }
  }
);

app.command("/broadcast", async ({ command, ack, client, logger, respond }) => {
  await ack();

  try {
    logger.info(
      `Broadcast initiated by user ${command.user_id} (@${command.user_name}) | trigger_id: ${command.trigger_id}) | message: "${command.text}"`
    );

    const isOwner = await isWorkspaceOwner(client, command.user_id);

    if (!isOwner) {
      await respond({
        text: "Sorry, you are not authorised to use this command. Contact a workspace owner for assistance.",
        response_type: "ephemeral",
      });
      return;
    }

    if (!command.text) {
      await respond({
        text: "Please provide a message to broadcast. Use /broadcast-preview first to see how it will look.",
        response_type: "ephemeral",
      });
      return;
    }

    const totalSent = await broadcastMessage(client, logger, {
      message: command.text,
      triggerId: command.trigger_id,
      skipBots: true,
      skipInactive: true,
      chunkSize: 50,
      delayMs: 1000,
    });

    await respond({
      text: `Broadcast completed successfully. Sent to ${totalSent} users.`,
      response_type: "ephemeral",
    });
  } catch (error) {
    await respond({
      text: "Failed to send broadcast message. Please try again.",
      response_type: "ephemeral",
    });
    logger.error("Broadcast failed:", error);
  }
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Bolt app is running!");
})();
