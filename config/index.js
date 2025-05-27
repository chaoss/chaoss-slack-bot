const config = {
  workspaceUrl: "https://slackbottest-mgq4853.slack.com",
  educationUrl: "https://chaoss.moodlecloud.com/my",
  pocs: {
    education: "U051Y6PHQ3H",
    chaossAfrica: "U0174P1MDAP",
  },
  channels: {
    newcomers: "C0207C3RETX",
    africa: "C03KC6ZERSR",
    africaDevs: "C03KQ1UQ20P",
    africaDesigners: "C03L1N9H92R",
    africaTechWriters: "C03L4JCEN83",
    africaCommunityManagers: "C03LUCA2988",
    africaResearchers: "C03KY46NL7Q",
    asia: "C0258G98SSX",
    balkans: "C065QARHZ19",
    lac: "C065QAP3X8T",
  },
  outreachy: {
    status: false,
    activeStatement:
      "You clicked *Outreachy*\nThe Outreachy Application period is currently going on. Reach out to https://www.outreachy.org/ for more details.",
    notActiveStatement:
      "You clicked *Outreachy*\nThe Outreachy Application period has ended for our participation in this program this year. You can still join the CHAOSS community in any of the ways found on our Participate page here: https://chaoss.community/participate.",
  },
  googleSummerOfCode: {
    status: false,
    activeStatement:
      "You clicked *Google Summer of Code*\nThe Google Summer of Code Application period is currently going on. Reach out to https://summerofcode.withgoogle.com/ for more details.",
    notActiveStatement:
      "You clicked *Google Summer of Code*\nThe Google Summer of Code Application period has ended for our participation in this program this year. You can still join the CHAOSS community in any of the ways found on our Participate page here: https://chaoss.community/participate.",
  },
  googleSeasonOfDocs: {
    status: false,
    activeStatement:
      "You clicked *Google Season of Docs*\nWelcome! If you haven’t yet, please join the <#C03C239HN1F> Slack channel and take note of the pinned item at the top of the channel for more information about next steps.",
    notActiveStatement:
      "You clicked *Google Season of Docs*\nThe Google Season of Docs Application period has ended for our participation in this program this year. You can still join the CHAOSS community in any of the ways found on our Participate page here: https://chaoss.community/participate.",
  },
};

module.exports = config;
