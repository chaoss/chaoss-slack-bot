function getWelcomeBlocks(userId) {
  return [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `Welcome to *CHAOSS Community* <@${userId}>! 🎉\nCheck out our <https://chaoss.community/kb-getting-started|Quick Start Guide> to get oriented, or choose how you'd like to get started:`,
      },
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "New to Open Source? Get Advice",
            emoji: true,
          },
          style: "primary",
          value: "newbie_advice",
          action_id: "newbie_advice",
        },
      ],
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Access Educational Materials",
            emoji: true,
          },
          style: "primary",
          value: "educational_materials",
          action_id: "educational_materials",
          // url: "https://chaoss.moodlecloud.com/my",
        },
      ],
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Develop Metrics",
            emoji: true,
          },
          style: "primary",
          value: "develop",
          action_id: "develop",
        },
      ],
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Join a Meeting",
            emoji: true,
          },
          style: "primary",
          value: "joinMeet",
          action_id: "joinMeet",
        },
      ],
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Contribute or Review Code",
            emoji: true,
          },
          style: "primary",
          value: "contribute",
          action_id: "contribute",
        },
      ],
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Help with the Website",
            emoji: true,
          },
          style: "primary",
          value: "website",
          action_id: "helpWithWebsite",
        },
      ],
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Write or Edit Documentation",
            emoji: true,
          },
          style: "primary",
          value: "docs",
          action_id: "docs",
        },
      ],
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Join a Mentorship Program",
            emoji: true,
          },
          style: "primary",
          value: "mentorship",
          action_id: "mentorship",
        },
      ],
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Implement Metrics in my Project",
            emoji: true,
          },
          style: "primary",
          value: "implement_metrics",
          action_id: "implement_metrics",
        },
      ],
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Join a Regional Chapter",
            emoji: true,
          },
          style: "primary",
          value: "regional_chapters",
          action_id: "regional_chapters",
        },
      ],
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Learn About Something Else",
            emoji: true,
          },
          style: "primary",
          value: "learn_something_else",
          action_id: "learn_something_else",
        },
      ],
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Go through the FAQs",
            emoji: true,
          },
          style: "primary",
          value: "faqs",
          action_id: "faqs",
        },
      ],
    },
  ];
}

function getWelcomeText(userId) {
  return `Welcome to the team, <@${userId}>! 🎉.`;
}

module.exports = {
  getWelcomeBlocks,
  getWelcomeText,
};
