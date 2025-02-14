<p align='center'>
  <a href='https://unico.io'>
    <img width='350' src='https://unico.io/wp-content/uploads/2024/05/idcloud-horizontal-color.svg'></img>
  </a>
</p>

<h1 align='center'>SDK By Client NextJS</h1>

<div align='center'>
  
  ### POC de implementação do By Client em NextJS
  
  <img width='350' src='https://i.pinimg.com/736x/4a/2b/e7/4a2be73b1e2efb44355436c40bf496dd.jpg'></img>
</div>

## 💻 Compatibilidade

### Versões mínimas

- Next 11

### Dispositivos compatíveis

- Você pode conferir os Browsers e dispositivos compatíveis <a href='https://devcenter.unico.io/idcloud/integracao/sdk/integracao-sdks/sdk-web/guia-de-instalacao#browsers-compativeis'>nesta</a> lista de dispositivos.


## ✨ Como começar


Entre em contato com o CSs e/ou time de Onboarding.

Solicite a SDK Key informando os identificadores de suas aplicações. Bundle Identifier para iOS, PackageID para Android e Host para WEB.

Os identificadores de suas aplicações serão vinculados a SDK Key pela equipe da Unico.

Você recebe a sua SDK Key para implementar o UnicoConfig evidenciado na POC.

Tais credenciais devem ser embarcadas em seu objeto de configuração:

```
import { UnicoConfig } from "unico-webframe"

const config = new UnicoConfig()
  .setHostname("<YOUR_HOSTNAME>")
  .setHostKey("<YOUR_HOST_KEY>");
```

Deve-se também criar uma pasta chamada de  `resources` e adicioná-la dentro da pasta `public` em seu projeto. Nela deverá conter os recursos adicionais necessários para a experiência e podem ser baixados  <a href='https://devcenter.unico.io/idcloud/integracao/sdk/integracao-sdks/sdk-web/guia-de-instalacao#browsers-compativeis'> aqui</a>, onde deverá baixar a pasta de recursos equivalente a versão da SDK utilizada na dependência `unico-webframe` em seu package.json . 
## ✨ Execução

Instale as dependências através do comando abaixo:

```
npm install
```

ou por Yarn no comando:

```
yarn add
```

Execute o projeto pelo comando:

```
npm run dev
```
---

## ✨ Link da nossa documentacao: 

Visão Geral da SDK: https://devcenter.unico.io/idcloud/integracao/sdk/visao-geral

Integração Web: https://devcenter.unico.io/idcloud/integracao/sdk/integracao-sdks/sdk-web/guia-de-instalacao




