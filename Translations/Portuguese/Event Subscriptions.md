

># [Escopos de token do bot](https://github.com/chaoss/chaoss-slack-bot/wiki/Bot-Token-Scopes-&-Event-Subscriptions#bot-token-scopes)

>Escopos que controlam o que seu aplicativo pode acessar. Esta é uma lista de escopos habilitados 
para bot CHAOSS Slack. Uma lista abrangente de escopos de permissão está disponível em [api.slack.com/scopes.](https://api.slack.com/scopes)

> |OAuth de Escopo | Descrição|
> |------------|-----------
> [app_mentions:read](https://api.slack.com/scopes/app_mentions:read)|Visualize mensagens que mencionam diretamente @welcometochaoss nas conversas em que o aplicativo está
>[channels:history](https://api.slack.com/scopes/channels:history)|Veja mensagens e outros conteúdos em canais públicos aos quais o Welcome-to-CHAOSS foi adicionado
>[channels:join](https://api.slack.com/scopes/channels:join)|Junte-se a canais públicos em um workspace
>[channels:read](https://api.slack.com/scopes/channels:read)|Visualize informações básicas sobre canais públicos em um workspace
>[chat:write](https://api.slack.com/scopes/chat:write)|Envie mensagens como @welcometochaoss
>[chat:write.customize](https://api.slack.com/scopes/chat:write.customize)|Envie mensagens como @welcometochaoss com nome de usuário e avatar personalizados
>[chat:write.public](https://api.slack.com/scopes/chat:write.public)|Envie mensagens para canais que @welcometochaoss não é membro
>[groups:history](https://api.slack.com/scopes/groups:history)|Veja mensagens e outros conteúdos em canais privados aos quais o Welcome-to-CHAOSS foi adicionado
>[groups:read](https://api.slack.com/scopes/groups:read)|Veja informações básicas sobre canais privados aos quais o Welcome-to-CHAOSS foi adicionado
>[im:history](https://api.slack.com/scopes/im:history)|Veja mensagens e outros conteúdos em mensagens diretas às quais o Welcome-to-CHAOSS foi adicionado
>[im:read](https://api.slack.com/scopes/im:read)|Veja informações básicas sobre mensagens diretas às quais o Welcome-to-CHAOSS foi adicionado
>[im:write](https://api.slack.com/scopes/im:write)|Comece mensagens diretas com pessoas
>[incoming-webhook](https://api.slack.com/scopes/incoming-webhook)|Publique mensagens em canais específicos no Slack
>[mpim:history](https://api.slack.com/scopes/mpim:history)|Veja mensagens e outros conteúdos em mensagens diretas de grupo às quais o Welcome-to-CHAOSS foi adicionado
>[mpim:write](https://api.slack.com/scopes/mpim:write)|Comece mensagens diretas em grupo com pessoas
>[users:read](https://api.slack.com/scopes/users:read)|Veja pessoas em um espaço de trabalho
>[users:write](https://api.slack.com/scopes/users:write)|Defina presença para boas-vindas ao CHAOSS

># [Assinaturas de eventos](https://github.com/chaoss/chaoss-slack-bot/wiki/Bot-Token-Scopes-&-Event-Subscriptions#event-subscriptions)

>Estes são os eventos do bot inscritos. Os outros eventos disponíveis estão documentados em [ api.slack.com/events.](https://api.slack.com/events)

>|Nome do evento |Descrição |Escopo necessário
>|--------------|-----------|----------------|
>[member_joined_channel](https://api.slack.com/events/member_joined_channel)|Um usuário entrou em um canal público ou privado|channels:read or groups:read
>[message.channels](https://api.slack.com/events/message.channels)|Uma mensagem foi postada em um canal|channels:history
>[message.groups](https://api.slack.com/events/message.groups)|Uma mensagem foi postada em um canal privado|groups:history
>[message.im](https://api.slack.com/events/message.im)|Uma mensagem foi postada em um canal de mensagens diretas|im:history
>[message.mpim](https://api.slack.com/events/message.mpim)|Uma mensagem foi postada em um canal de mensagem direta multipartidário|	mpim:history
>[team_join](https://api.slack.com/events/team_join)|Um novo membro se juntou|users:read