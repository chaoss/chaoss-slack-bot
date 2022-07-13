async function outreachy(say) {
  return await say(
    `You clicked *Outreachy*\n
    The Outreachy Application period has ended for our participation in this program this year. You can still join the CHAOSS community in any of the ways found on our Participate page here: https://chaoss.community/participate.`
  );
}

async function gsoc(say) {
  return await say(
    `You clicked *Google Summer of Code*\n
    The Google Summer of Code Application period has ended for our participation in this program this year. You can still join the CHAOSS community in any of the ways found on our Participate page here: https://chaoss.community/participate.`
  );
}

async function gsod(say) {
  return await say(
    `You clicked *Google Season of Docs*\n
    Welcome! If you haven’t yet, please join the <#C03C239HN1F> Slack channel and take note of the pinned item at the top of the channel for more information about next steps.`
  );
}

module.exports = {
  outreachy,
  gsoc,
  gsod,
};
