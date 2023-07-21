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

async function learn_something_else(say) {
  return await say(
    `You clicked *Learn About Something Else*\n
    We encourage you to read through our Community Handbook: https://handbook.chaoss.community/, and if you still can't find what you're looking for, feel free to ask your question in our #newcomers slack channel.`

  );
}

async function faqs(say) {
  return await say(
    `You clicked *FAQs*\n
    We encourage you to read through our Frequently Asked Questions: https://handbook.chaoss.community/community-handbook/about/general-faq, and if you still can't find what you're looking for, feel free to ask your question in our #newcomers slack channel.`

  );
}

module.exports = {
  develop,
  joinMeet,
  docs,
  contribute,
  helpWithWebsite,
  implement_metrics,
  learn_something_else,
  faqs
};
