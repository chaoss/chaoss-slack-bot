const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const broadcastMessage = async (client, logger, config) => {
  const {
    message,
    triggerId,
    skipBots = true,
    skipInactive = true,
    chunkSize = 50, // Process users in chunks of 50
    delayMs = 1000, // Delay between chunks (1 second)
  } = config;

  try {
    // Get all users
    const result = await client.users.list();

    // Filter users based on configuration
    const validUsers = result.members.filter((user) => {
      return !(skipBots && user.is_bot) && !(skipInactive && user.deleted);
    });

    // Split users into chunks
    const chunks = [];
    for (let i = 0; i < validUsers.length; i += chunkSize) {
      chunks.push(validUsers.slice(i, i + chunkSize));
    }

    // Process each chunk with delay
    let totalSent = 0;
    for (const chunk of chunks) {
      // Send messages to current chunk of users
      const sendPromises = chunk.map(async (user) => {
        try {
          await client.chat.postMessage({
            channel: user.id,
            text: message,
            unfurl_links: false,
          });
          return true;
        } catch (error) {
          logger.error(`Failed to send message to user ${user.id}:`, error);
          return false;
        }
      });

      // Wait for all messages in current chunk to be sent
      const results = await Promise.all(sendPromises);
      totalSent += results.filter(Boolean).length;

      // Log progress
      logger.info(`Progress: ${totalSent}/${validUsers.length} messages sent`);

      // Wait before processing next chunk
      if (chunks.indexOf(chunk) < chunks.length - 1) {
        await sleep(delayMs);
      }
    }

    logger.info(
      `Broadcast complete: ${totalSent} messages sent successfully. | trigger_id: ${triggerId}`
    );
    return totalSent;
  } catch (error) {
    logger.error("Failed to broadcast message:", error);
    throw error;
  }
};

const previewBroadcast = async (client, logger, userId, message) => {
  try {
    await client.chat.postMessage({
      channel: userId,
      text: `[PREVIEW] This is how your broadcast will look:\n\n${message}`,
      unfurl_links: false,
    });
    return true;
  } catch (error) {
    logger.error(`Failed to send preview to user ${userId}:`, error);
    throw error;
  }
};

module.exports = { broadcastMessage, previewBroadcast };
