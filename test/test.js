/*
|--------------------------------------------------------------------------
| Testes
|--------------------------------------------------------------------------
*/

// Definindo ambiente de teste

process.env.NODE_ENV = 'test';

// Importando o Express e o supertest

var express = require('../config/express');
var request = require('supertest')(express);

// Teste de GET

describe('/GET Todos',() => {
    it('Está trazendo os Todos?', done => {
           request.get('/todos')
           .expect(200, done());
    });
})

// Teste de GET por id

describe('/GET Todo ID',() => {
    it('Está trazendo Todos pelo seu ID?', done =>{
           request.get('/todo/1')
           .expect(200,done());
    });
})

// Teste de POST

describe('/POST Todo',() => {

  it('Está cadastrando?', done => {

          var todoItem = {
                 "title": "Estudar Node",
                 "description": "Estudar Versão mais nova do Node",
                 "image": "default.png",
                 "isChecked": false 
          } 

         request.post('/todos')
         .send(todoItem)
         .expect(200,done());
  });

  // it('Está validando campos vazios?', function(done){

  //         var postData = {
  //                "title": "",
  //                "description": "",
  //                "image": ""
  //         }

  //        request.post('/posts')
  //        .send(postData)
  //        .expect(200,done);
  // })

})


// Teste de PUT

describe('/PUT Todo',() => {

  it('Está atualizando?', done => {

          var todoItem = {
            "title": "Estudar Node",
            "description": "Estudar Versão mais nova do Node",
            "image": "default.png",
            "isChecked": true
          }

         request.put('/todo/update/2')
         .send(todoItem)
         .expect(200,done());
  });

})

// Teste de Delete

describe('/DELETE Todo',() =>{

    it('Está deletando?', done => {
           request.delete('/todo/3')
           .expect(200,done()); 
    });

})
