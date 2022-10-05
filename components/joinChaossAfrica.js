async function joinChaossAfrica(event, client, logger){
    try{
        return await client.chat.postMessage({
          channel: event.user.id,
          blocks:  [
            {
                type: 'section',
                text: {
                    type: 'mrkdwn',
                    text: `Welcome to all our Newcomers! The goal of CHAOSS Africa is to identify and solve challenges African Open Source Contributors face and also contribute to the larger CHAOSS group. We usually have our community meetings, once every two weeks, Thursdays at 3 PM WAT!
                    
                    In the meantime, you should check out our different focus group channels and join one of them depending on your skillset:
                    
                    - [#chaossafrica-cm for community managers](https://chaoss-workspace.slack.com/archives/C03LUCA2988)
                    - [#chaossafrica-designers for designers](https://chaoss-workspace.slack.com/archives/C03L1N9H92R)
                    - [#chaossafrica-devs for developers](https://chaoss-workspace.slack.com/archives/C03KQ1UQ20P)
                    - [#chaossafrica-techwriters for technical writers](https://chaoss-workspace.slack.com/archives/C03L4JCEN83)
                    - [#chaossafrica-researchers for researchers and data scientists](https://chaoss-workspace.slack.com/archives/C03KY46NL7Q)

                    If you have any questions, you can ask [@Ruth Ikegah (She/her)](https://chaoss-workspace.slack.com/team/U0174P1MDAP) or on the channel.

                    `
                }
            }
          ]
        })
    }
    catch(error){
        console.log(error);
        logger.error(error);
    }
}

exports.joinChaossAfrica = joinChaossAfrica;