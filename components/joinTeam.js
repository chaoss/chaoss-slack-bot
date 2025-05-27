const { getWelcomeBlocks, getWelcomeText } = require("./shared/welcomeBlocks");

async function joinTeamSlack(event, client, logger) {
  try {
    console.log("join team: ", event);
    return await client.chat.postMessage({
      channel: event.user.id,
      blocks: getWelcomeBlocks(event.user.id),
      text: getWelcomeText(event.user.id),
    });
  } catch (error) {
    console.log(error);
    logger.error(error);
  }
}

exports.joinTeamSlack = joinTeamSlack;
