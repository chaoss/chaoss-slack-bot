const config = require("../../config");

const { channels, pocs } = config;

async function develop(say) {
  return await say(
    `You clicked *Develop Metrics* \n
    There are 5 Working Groups that develop metrics based on different aspects of open source community health: Risk, Value, Evolution, DEI, and Common.  More information about each of these groups can be found here: <https://handbook.chaoss.community/community-handbook/community-initiatives/working-groups>. The metrics are developed during our Working Group meetings.
    `
  );
}

async function joinMeet(say) {
  return await say(
    `You clicked *Join Meeting*\n
    All CHAOSS meetings are open to everyone, and they happen virtually at  <https://zoom.us/my/chaoss> We recommend a good first meeting is our Weekly Community Call (Every Tuesday at 11:00 am US Central/Chicago time) but you can see a calendar of all our meetings at https://chaoss.community/chaoss-calendar/.
    `
  );
}

async function contribute(say) {
  return await say(
    `You clicked *Contribute or Review code*\n
    You are welcome to contribute. Please see this documentation: https://chaoss.community/kb/development-contribution/.
    `
  );
}

async function helpWithWebsite(say) {
  return await say(
    `You clicked *Help with the Website*\n first step is getting to know our community! You can connect with us in any of the ways described in our Getting Started page here: https://chaoss.community/kb-getting-started/.
    `
  );
}

async function docs(say) {
  return await say(
    `You clicked *Write or Edit Documentation*\n
    Please see this documentation: https://chaoss.community/kb/documentation-contributions/.
    `
  );
}

async function implement_metrics(say) {
  return await say(
    `You clicked *Implement Metrics in my Project*\n
    We encourage you to join one of our Working Groups for specific questions about implementing your metrics. You can read more about them here: https://handbook.chaoss.community/community-handbook/community-initiatives/working-groups.`
  );
}

async function regional_chapters(say) {
  const baseUrl = `${config.workspaceUrl}/archives`;
  const { africa, asia, balkans, lac } = channels;
  return await say({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `You clicked *Join a Regional Chapter*
          \nOur local chapters are ways to collaborate with others in your region. You can learn more about them here: https://chaoss.community/kb/local-chapters. You can also check out our different regional chapter channels and join one of them depending on your region:

                  - <#${africa}> for CHAOSS Africa
                  - <#${asia}> for CHAOSS Asia
                  - <#${balkans}> for CHAOSS Balkans
                  - <#${lac}> for CHAOSS Latin America & Caribbean`,
        },
      },
    ],
    text: `You clicked *Join a Regional Chapter*. 
    Our local chapters are ways to collaborate with others in your region. You can join the channels:
    CHAOSS Africa: ${baseUrl}/${africa}
    CHAOSS Asia: ${baseUrl}/${asia}
    CHAOSS Balkans: ${baseUrl}/${balkans}
    CHAOSS Latin America and Caribbean: ${baseUrl}/${lac}`,
  });
}

async function learn_something_else(say) {
  return await say(
    `You clicked *Learn About Something Else*\n
    We encourage you to read through our Community Documentation: https://chaoss.community/kb-chaoss-community/, and if you still can't find what you're looking for, feel free to ask your question in our <#${channels.newcomers}> slack channel.`
  );
}

async function faqs(say) {
  return await say(
    `You clicked *FAQs*\n
    We encourage you to read through our Frequently Asked Questions: https://handbook.chaoss.community/community-handbook/about/general-faq, and if you still can't find what you're looking for, feel free to ask your question in our <#${channels.newcomers}> slack channel.`
  );
}

async function newbie_advice(say) {
  return await say(
    `You clicked *New to Open Source ? Get Advice* \n
    Welcome to the CHAOSS Community! Starting your journey in open source can be exciting and rewarding. To help you get started, we have a detailed guide just for newcomers. You can find it here:\n <https://github.com/chaoss/community/blob/main/advice_to_newcomers.md>. \n
    This guide provides tips, best practices, and encouragement to help you make meaningful contributions. Remember, every contribution, big or small, matters. We're here to support you every step of the way! 🎉`
  );
}

async function educational_materials(say) {
  return await say({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `You clicked *Access Educational Materials*\n
Welcome to CHAOSS Education! This platform contains a variety of learning resources to help you:
• Learn Git and GitHub basics
• Understand open source contribution
• Master development tools and practices
• Work with community health metrics\n
Access the materials here: ${config.educationUrl}`,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `Note: You'll need to create a free account to access the content. If you have any questions, feel free to ask in <#${channels.newcomers}> or reach out to <@${pocs.education}>.`,
        },
      },
    ],
  });
}

module.exports = {
  develop,
  joinMeet,
  docs,
  contribute,
  helpWithWebsite,
  implement_metrics,
  regional_chapters,
  learn_something_else,
  faqs,
  newbie_advice,
  educational_materials,
};
