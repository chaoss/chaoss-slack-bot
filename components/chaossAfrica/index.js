const config = require("../../config");

const focusGroups = {
  africaCommunityManagers: "Community Managers",
  africaDesigners: "Designers",
  africaDevs: "Developers",
  africaTechWriters: "Technical Writers",
  africaResearchers: "Researchers and Data Scientists",
};

const responseBase = `The goal of CHAOSS Africa is to identify and solve challenges African Open Source Contributors face and also contribute to the larger CHAOSS group. We usually have our community meetings, once every two weeks, Thursdays at 3 PM WAT!\n\nIn the meantime, you should check out our different focus group channels and join one of them depending on your skillset:\n`;

const response =
  responseBase +
  Object.entries(focusGroups)
    .map(([key, value]) => `- <#${config.channels[key]}> for ${value}`)
    .join("\n") +
  `\n\nIf you have any questions, you can ask <@U0174P1MDAP> or on the channel.`;

const a11yResponse =
  responseBase +
  Object.entries(focusGroups)
    .map(
      ([key, value]) =>
        `- ${value}: ${config.workspaceUrl}/archives/${config.channels[key]}`
    )
    .join("\n") +
  `\n\nIf you have any questions, you can ask Ruth Ikegah: ${config.workspaceUrl}/archives/D03AXJTBVNK or on the channel.`;

async function chaossAfricaInfo(message, client, logger) {
  try {
    return await client.chat.postMessage({
      channel: message.user,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Welcome <@${message.user}>! ${response}`,
          },
        },
      ],
      text: `Welcome to CHAOSS Africa, <@${message.user}>! 🎉. ${a11yResponse}`,
    });
  } catch (error) {
    console.log(error);
    logger.error(error);
  }
}

async function joinChaossAfrica(event, client, logger) {
  try {
    if (event.channel !== config.channels.africa) {
      return;
    }

    return await client.chat.postMessage({
      channel: event.user,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Welcome to all our Newcomers! ${response}`,
          },
        },
      ],
      text: `Welcome to CHAOSS Africa! 🎉. ${a11yResponse}`,
    });
  } catch (error) {
    console.log(error);
    logger.error(error);
  }
}

module.exports = { joinChaossAfrica, chaossAfricaInfo };
