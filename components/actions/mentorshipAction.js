async function mentorship(say) {
  await say({
    // Choosing "Contribute through a mentorship program" triggers these nested radio buttons
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'Which mentorship program are you interested in?',
        },
        accessory: {
          type: 'radio_buttons',
          options: [
            {
              text: {
                type: 'plain_text',
                text: '*Outreachy*',
                emoji: true,
              },
              value: 'outreachy',
            },
            {
              text: {
                type: 'plain_text',
                text: '*Google Summer of Code*',
                emoji: true,
              },
              value: 'gsoc',
            },
            {
              text: {
                type: 'plain_text',
                text: '*Google Season of Docs*',
                emoji: true,
              },
              value: 'gsod',
            },
          ],
          action_id: 'mentorship_selection',
        },
      },
    ],
    text: 'Which mentorship program are you interested in?',
  });
}

exports.mentorship = mentorship;
