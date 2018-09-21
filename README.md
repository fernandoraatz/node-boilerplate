# Node

Estrutura básica em Node.js

### Descrição

- API em Node.js como servidor.  
- Express como middleware.  
- Nodemon para observar alterações no servidor.  
- Consign para gerenciar as pastas.  
- Body Parser para pegar parâmetros enviados das requisicões.  
- Utiliza EJS como Template View
- Debug configurado com VsCode

### Pré-Requisitos

Instalar o Node e seus módulos.  

### Procedimentos

Instalar os módulos do package.json:

```
npm install
```

Rodar o servidor usando o Nodemon:

```
npm start

```

Fazendo um GET com curl para testar:

```
curl -i "http://localhost:3001"
```

---

## Estrutura Básica

Estrutura básica de pastas e arquivos:

- **.vscode**
  - *launch.json*
- **app**
  - **controllers**
    - *views.js*
  - **routes**
    - *views.js*
  - **static**
    - *css*
    - *fonts*
    - *images*
    - *js*
  - **views**
    - **admin**
      - *register.ejs*
    - **partials**
      - *footer.ejs*
      - *header.ejs*
    - **public**
      - *404.ejs*
      - *index.ejs*
- **config**
  - *express.js*
- *index.js*
- *package.json*

---
