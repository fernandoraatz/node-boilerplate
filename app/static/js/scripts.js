/*
|--------------------------------------------------------------------------
| Custom Scripts
|--------------------------------------------------------------------------
*/

// Defining querySelector alias

let $ = document.querySelector.bind(document);

// Messenger

class Messenger {

  constructor(){
      this.showMessage();
  }

  showMessage(){
    console.log('Função iniciada com sucesso')
  }


}

// Iniciando Classe

let messengerController = new Messenger();
