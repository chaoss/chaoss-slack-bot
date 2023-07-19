async function joinTeamSlack(event, client, logger) {
  try {
    console.log("join team: ",event);
    return await client.chat.postMessage({
      channel: event.user.id,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `Welcome to *CHAOSS Community* <@${event.user.id}>! 🎉How would you like to get started? \n\nI want to..`,
          },
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Develop Metrics',
                emoji: true,
              },
              style: 'primary',
              value: 'develop',
              action_id: 'develop',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Join a Meeting',
                emoji: true,
              },
              style: 'primary',
              value: 'joinMeet',
              action_id: 'joinMeet',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Contribute or Review Code',
                emoji: true,
              },
              style: 'primary',
              value: 'contribute',
              action_id: 'contribute',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Help with the Website',
                emoji: true,
              },
              style: 'primary',
              value: 'website',
              action_id: 'helpWithWebsite',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Write or Edit Documentation',
                emoji: true,
              },
              style: 'primary',
              value: 'docs',
              action_id: 'docs',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Contribute through a Mentorship Program',
                emoji: true,
              },
              style: 'primary',
              value: 'mentorship',
              action_id: 'mentorship',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Implement Metrics in my Project',
                emoji: true,
              },
              style: 'primary',
              value: 'implement_metrics',
              action_id: 'implement_metrics',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Learn About Something Else',
                emoji: true,
              },
              style: 'primary',
              value: 'learn_something_else',
              action_id: 'learn_something_else',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Go through the FAQs',
                emoji: true,
              },
              style: 'primary',
              value: 'faqs',
              action_id: 'faqs',
            },
          ],
        },
      ],
      text: `Welcome to the team, <@${event.user.id}>! 🎉.`,
    });
  } catch (error) {
    console.log(error);
    logger.error(error);
  }
}

exports.joinTeamSlack = joinTeamSlack;
