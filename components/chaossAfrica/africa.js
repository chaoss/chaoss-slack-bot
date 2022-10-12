async function chaossAfrica(message, client, logger) {
	try {
		return await client.chat.postMessage({
			channel: message.user,
			blocks: [
				{
					type: "section",
					text: {
						type: "mrkdwn",
						text: `Welcome <@${message.user}>! The goal of CHAOSS Africa is to identify and solve challenges African Open Source Contributors face and also contribute to the larger CHAOSS group. We usually have our community meetings, once every two weeks, Thursdays at 3 PM WAT!

            \nIn the meantime, you should check out our different focus group channels and join one of them depending on your skillset:

            - <#C03LUCA2988> for community managers
            - <#C03L1N9H92R> for designers
            - <#C03KQ1UQ20P> for developers
            - <#C03L4JCEN83> for technical writers
            - <#C03KY46NL7Q> for researchers and data scientists

            \nIf you have any questions, you can ask <@U0174P1MDAP> or on the channel.

            `,
					},
				},
			],
			text: `Welcome to CHAOSS Africa, <@${message.user}>! 🎉.`,
		});
	} catch (error) {
		console.log(error);
		logger.error(error);
	}
}

exports.chaossAfrica = chaossAfrica;
