# Primeiramente:

Assista os 2 vídeos que estão na pasta `@important`, o primeiro vídeo a se assistir se chama `getting-started.mkv`.

# Como usar:

### No terminal do seu VSCode digite:

```terminal
    npm i
    ouq
    npm install
```

_Obs_: O `i` é a abreviação de install, tenha como preferência utilizar `npm i` pois é mais prático.

Isso fará com que as dependências do projeto sejam instaladas com base no arquivo `package.json`, gerando uma pasta chamada,
`node_modules`

```json
{
  //package.json

  ...,
  "dependencies": {
    "qrcode-terminal": "^0.12.0",
    "whatsapp-web.js": "^1.25.0"
  }
}
```

Note que acima, dentro do package.json, temos 2 dependências, uma responsável pelo bot `whatsapp-web.js` e a outra
responsável por realizar a conexão via QR Code `qrcode-terminal`. Elas básicamente seram instaladas juntamente com suas outras
dependências. Podem haver mais com o passar do tempo que o projeto for tomando forma e crescendo.

### Como rodar o projeto

Após concluir as etapas acima basta ir novamente no seu terminal e digitar:

```terminal
    npm run dev
```

Esse comando fará a mesma coisa que se digitarmos `node src/index.js` para executar o arquivo responsável por ligar a robô.

Depois disso, basta realizar a conexão via QR Code com seu telefone celular diretamente no WhatsApp.
