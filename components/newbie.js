const { getWelcomeBlocks, getWelcomeText } = require("./shared/welcomeBlocks");

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

exports.newHere = newHere;
