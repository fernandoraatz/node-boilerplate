# Node

API de um todolist em Node.js

---

## Descrição

- API em Node.js como servidor.  
- Express como middleware.  
- MongoDB como banco
- Nodemon para observar alterações no servidor.  
- Consign para gerenciar as pastas.  
- Body Parser para pegar parâmetros enviados das requisicões.  
- Nunjucks como Template View
- Debug configurado com VsCode
- Testes com Mocha/Chai/Supertest
- Docker com container da aplicação e do banco

---

## Pré-Requisitos

Instalar o Node e seus módulos.  

## Procedimentos

Instalar os módulos do package.json:

```css
npm install
```

Rodar o servidor usando o Nodemon:

```css
npm start
```

Fazendo um GET com curl para testar:

```css
curl -H "Accept: application/json" http://localhost:8080/todos
```

---

## Instalar Módulos e Rodar com docker

Construir o projeto com docker:

```css
sudo docker-compose up --build
```

Rodar com docker:

```css
sudo docker-compose start
```
