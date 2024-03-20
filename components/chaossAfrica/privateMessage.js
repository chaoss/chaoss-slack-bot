async function sendPrivateMessage(message, event, client) {

        try {
            await client.chat.postMessage({
                channel: event.user.id,
                blocks: [
                    {
                        type: 'section',
                        text: {
                            type: 'mrkdwn',
                            text: `do not say that <@${event.user.id}>!`,
                        },
                    }
                ]
            });
            console.log("Private message sent successfully!");
        } catch (error) {
            console.error("Error sending private message:", error);
        }
    }

 exports.sendPrivateMessage = sendPrivateMessage;