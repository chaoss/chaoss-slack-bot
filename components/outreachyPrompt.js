const constantData = require("./actions/constants/constants.json");

async function outreachyMessage(message, say, logger) {
  try {
    if (constantData.Outreachy.status) {
      // return await say(`Whats up segment <@${message.user}>!`);
      return await say({
        channel: message.user,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
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
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
    logger.error(error);
  }
}

exports.outreachyMessage = outreachyMessage;
