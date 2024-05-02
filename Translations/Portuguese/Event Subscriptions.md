# Escopos do Token do Bot
Escopos que governam o que seu aplicativo pode acessar. Esta é uma lista dos escopos habilitados para o bot CHAOSS no Slack. Uma lista abrangente de escopos de permissão está disponível em [api.slack.com/scopes](https://api.slack.com/scopes).

Escopo OAuth | Descrição
-- | --
[app_mentions:read](https://api.slack.com/scopes/app_mentions:read) | Visualizar mensagens que mencionam diretamente @welcometochaoss em conversas em que o aplicativo está presente
[channels:history](https://api.slack.com/scopes/channels:history) | Visualizar mensagens e outros conteúdos em canais públicos aos quais welcome-to-CHAOSS foi adicionado
[channels:join](https://api.slack.com/scopes/channels:join) | Participar de canais públicos em um espaço de trabalho
[channels:read](https://api.slack.com/scopes/channels:read) | Visualizar informações básicas sobre canais públicos em um espaço de trabalho
[chat:write](https://api.slack.com/scopes/chat:write)| Enviar mensagens como @welcometochaoss
[chat:write.customize](https://api.slack.com/scopes/chat:write.customize) | Enviar mensagens como @welcometochaoss com um nome de usuário e avatar personalizados
[chat:write.public](https://api.slack.com/scopes/chat:write.public) | Enviar mensagens para canais dos quais @welcometochaoss não é membro
[groups:history](https://api.slack.com/scopes/groups:history) | Visualizar mensagens e outros conteúdos em canais privados aos quais welcome-to-CHAOSS foi adicionado
[groups:read](https://api.slack.com/scopes/groups:read) | Visualizar informações básicas sobre canais privados aos quais welcome-to-CHAOSS foi adicionado
[im:history](https://api.slack.com/scopes/im:history) | Visualizar mensagens e outros conteúdos em mensagens diretas para as quais welcome-to-CHAOSS foi adicionado
[im:read](https://api.slack.com/scopes/im:read) | Visualizar informações básicas sobre mensagens diretas para as quais welcome-to-CHAOSS foi adicionado
[im:write](https://api.slack.com/scopes/im:write) | Iniciar mensagens diretas com pessoas
[incoming-webhook](https://api.slack.com/scopes/incoming-webhook) | Enviar mensagens para canais específicos no Slack
[mpim:history](https://api.slack.com/scopes/mpim:history) | Visualizar mensagens e outros conteúdos em mensagens diretas em grupo para as quais welcome-to-CHAOSS foi adicionado
[mpim:write](https://api.slack.com/scopes/mpim:write) | Iniciar mensagens diretas em grupo com pessoas
[users:read](https://api.slack.com/scopes/users:read) | Visualizar pessoas em um espaço de trabalho
[users:write](https://api.slack.com/scopes/users:write) | Definir presença para welcome-to-CHAOSS

# Inscrições de Eventos
Estes são os eventos do bot inscritos. Os outros eventos disponíveis estão documentados em [api.slack.com/events](https://api.slack.com/events)

Nome do Evento | Descrição | Escopo Necessário
-- | -- | --
[member_joined_channel](https://api.slack.com/events/member_joined_channel) | Um usuário entrou em um canal público ou privado | channels:read or groups:read
[message.channels](https://api.slack.com/events/message.channels) | Uma mensagem foi enviada para um canal | channels:history
[message.groups](https://api.slack.com/events/message.groups) | Uma mensagem foi enviada para um canal privado | groups:history
[message.im](https://api.slack.com/events/message.im) | Uma mensagem foi enviada em um canal de mensagem direta | im:history
[message.mpim](https://api.slack.com/events/message.mpim) | Uma mensagem foi enviada em um canal de mensagem direta multiparte | mpim:history
[team_join](https://api.slack.com/events/team_join) | Um novo membro entrou | users:read