[Contribution Guide](https://github.com/chaoss/chaoss-slack-bot/wiki/Contribution-Guide)

# Guia de contribuição

Adoramos receber pull requests de todos! Seguimos o fluxo de trabalho padrão do Git de fork -> change -> pull request -> merge -> update fork -> change ... (repetir para sempre). Se você é novo no código aberto, recomendamos o excelente guia do GitHub sobre "[Como contribuir para o código aberto](https://opensource.guide/how-to-contribute/)". Além disso, sinta-se à vontade para entrar em contato com qualquer um dos mantenedores ou outros membros da comunidade se estiver com dificuldades; estamos aqui para ajudá-lo a aprender!

## Abrindo um problema

Se você estiver enfrentando problemas com o CHAOSS Slack Bot ou tiver alguma dúvida que gostaria de ajuda para responder, sinta-se à vontade para abrir um [issue](https://github.com/chaoss/chaoss-slack-bot/issues). Para nos ajudar a evitar duplicatas, pedimos que você pesquise brevemente o seu problema ou dúvida em nossas [issues](https://github.com/chaoss/chaoss-slack-bot/issues) antes de abrir uma nova. Observe que se você abrir um relatório de bug, não poderemos ajudá-lo até que você nos forneça todas as informações relevantes. Respeitosamente, não temos tempo para tentar recriar um erro fornecido com o mínimo ou nenhum contexto, portanto, ao fornecer essas informações, você está nos ajudando a ajudá-lo! Forneça descrições da melhor maneira possível e inclua capturas de tela e erroros de logs, se aplicável.

## Guia de desenvolvimento

1. Fork [este repositório](https://github.com/chaoss/chaoss-slack-bot) e clone-o.
```
$ git clone https://github.com/chaoss/chaoss-slack-bot.git
$ cd chaoss-slack-bot
$ git remote add upstream https://github.com/chaoss/chaoss-slack-bot.git
```
2. Instalar dependências
```
npm install or yarn add
```
3. Somente para ***PCs com Windows***: Renomeie .env.example para .env e insira seus tokens entre aspas. Certifique-se de incluir o arquivo .env em seu arquivo .gitignore.

4. Crie uma nova branch
```
$ git checkout -b my-new-branch
```
5. Faça suas alterações. Nós encorajamos você a escrever testes.

6. Confirme as alterações com uma mensagem de commit descritiva (aqui está um [guia](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/) para escrever boas mensagens de commit) e envie para seu fork. PS: se você não estiver familiarizado com o DCO, leia o guia sobre como signing off commits abaixo antes de voltar a esta etapa.
```
$ git add .
$ git commit -s -m "descriptive commit message"
$ git push -u origin my-new-branch
```
6. Envie uma pull request. Neste ponto, você está esperando por nós. Gostamos de comentar pelo menos as solicitações pull request dentro de três dias úteis (e, normalmente, um dia útil). Assim que um de nossos mantenedores tiver a chance de revisar seu PR, iremos marcá-lo como "revisão necessária" e fornecer feedback específico sobre suas alterações ou prosseguiremos e concluiremos a solicitação pull request.

## Adicione assinatura nos commits

Para contribuir com este projeto, você deve concordar com o [Certificado de Origem do Desenvolvedor](https://developercertificate.org/) da [carta CHAOSS](https://chaoss.community/charter/#user-content-8-intellectual-property-policy) para cada commit que você fizer. O DCO é uma simples declaração de que você, como contribuinte, tem o direito legal de fazer a contribuição. Para indicar que você concorda com as contribuições do DCO, basta adicionar uma linha a cada uma de suas mensagens de commit do git:
```
Signed-off-by: Jane Smith <jane.smith@example.com>
```
Isso pode ser feito facilmente usando o sinalizador -s ao usar o git commit. Por exemplo:
```
$ git commit -s -m "my commit message w/signoff"
```
Para garantir que todos os seus commits sejam assinados, você deve configurar o git corretamente editando seu .gitconfig global
```
$ git config --global user.name "John Doe" 
$ git config --global user.email johndoe@example.com
```
Quaisquer solicitações pull request contendo commits que não foram assinados não serão elegíveis para mesclagem até que os commits sejam assinados. Mantendo-se sincronizado com o repositório do Chaoss Slack Bot Lembre-se de sincronizar seu fork com o branch principal regularmente. Para fazer isso: Certifique-se de estar na pasta raiz do projeto e o branch deve ser master branch e digite
```
$ git remote add upstream https://github.com/chaoss/chaoss-slack-bot.git
```
Agora que você tem sua configuração upstream em sua máquina local, sempre que precisar fazer um novo branch para fazer alterações certifique-se de que seu branch principal esteja sincronizado com o repositório principal, para fazer isso, certifique-se de estar no branch principal e digite:
```
$ git pull upstream master
$ git push origin master
```