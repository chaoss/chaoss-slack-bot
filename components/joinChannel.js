const testChannel = "C03D3L8TNMD";

async function memberJoin(event, client, logger) {
	try {
		return await client.chat.postMessage({
			channel: testChannel,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `Welcome to the team, <@${event.user.id}>! 🎉.`,
          },
        },
      ],
			text: `Welcome to the team, <@${event.user.id}>! 🎉.`,
		});
	} catch (error) {
		console.log(error);
		logger.error(error);
	}
}

exports.memberJoin = memberJoin;
