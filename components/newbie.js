const { getWelcomeBlocks, getWelcomeText } = require("./shared/welcomeBlocks");
const config = require("../config");

const { channels, pocs } = config;

function getEducationalMaterialsBlocks(customMessage = null) {
  const defaultMessage = `Explore CHAOSS Education - your gateway to comprehensive learning resources designed to help you master open source community health analytics:

• *Welcome to Open Source 101* - Perfect for beginners
• *All About CHAOSS* - Understanding our mission and methodology
• *CHAOSS Practitioner Guides* - Hands-on implementation guidance
• *CHAOSS Software Tools* - Technical resources and tutorials\n
🎓 Access all materials here: ${config.educationUrl}`;

  return [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: customMessage
          ? `${customMessage}\n${defaultMessage}`
          : defaultMessage,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `Note: You'll need to create a free account to access the content. If you have any questions, feel free to ask in <#${channels.newcomers}> or reach out to <@${pocs.education}>.`,
      },
    },
  ];
}

async function newHere(message, client, logger) {
  try {
    return await client.chat.postMessage({
      channel: message.user,
      blocks: getWelcomeBlocks(message.user),
      text: getWelcomeText(message.user),
    });
  } catch (error) {
    console.log(error);
    logger.error(error);
  }
}

async function sendEducationalMaterials(message, client, logger) {
  try {
    return await client.chat.postMessage({
      channel: message.user,
      blocks: getEducationalMaterialsBlocks(
        "Hello! I noticed you introduced yourself in the newcomers channel. Here are our educational materials that might help you get started:\n"
      ),
      text: `Hello! I noticed you introduced yourself in the newcomers channel. Here are our educational materials: ${config.educationUrl}`,
    });
  } catch (error) {
    console.log(error);
    logger.error(error);
  }
}

exports.newHere = newHere;
exports.sendEducationalMaterials = sendEducationalMaterials;
exports.getEducationalMaterialsBlocks = getEducationalMaterialsBlocks;
