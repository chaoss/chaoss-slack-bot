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
                type: 'mrkdwn',
                text: '*Outreachy*',
              },
              value: 'outreachy',
            },
            {
              text: {
                type: 'mrkdwn',
                text: '*Google Summer of Code*',
              },
              value: 'gsoc',
            },
            {
              text: {
                type: 'mrkdwn',
                text: '*Google Season of Docs*',
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
