async function sendPrivateMessage(message, event, client) {
    const keyword = "fuck";

    if (message.includes(keyword)) {
        console.log("Sending private message to user: ", message);

        try {
            await client.chat.postMessage({
                channel: event.user.id,
                blocks: [
                    {
                        type: 'section',
                        text: {
                            type: 'mrkdwn',
                            text: `Welcome to *CHAOSS Community* <@${event.user.id}>! 🎉 How would you like to get started? \n\nI want to..`,
                        },
                    }
                ]
            });
            console.log("Private message sent successfully!");
        } catch (error) {
            console.error("Error sending private message:", error);
        }
    }
}


 exports.sendPrivateMessage = sendPrivateMessage;