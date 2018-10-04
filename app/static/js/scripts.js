/*
|--------------------------------------------------------------------------
| Script ES6
|--------------------------------------------------------------------------
*/

let $ = document.querySelector.bind(document);

var api_url = 'http://localhost:8000/'

// Form

class Form {

  constructor(){ 
      this.clickDeleteButton();
      this.submitFormUpdate();
      this.submitFormImage();
  }

  // Submit Form Image

  submitFormImage() {
      let formImage = $('#form-image');

      if(formImage){
          formImage.addEventListener("submit", this.uploadImage, false);
      }
  } 

  uploadImage(e) {
    e.preventDefault();

    let inputElement = $('input[name="image"]')
    let file = inputElement.files[0];
    let nome = inputElement.files[0].name;
    let url = `${api_url}images/upload`; 

    fetch(url, {
        method: 'POST',
        headers: {'Content-Type':'application/octet-stream', 'filename':''+ nome +''},
        body: file
    })
    .then(res => {
      alert('Imagem Adicionada');
      location.href = api_url + "images"
    })


  }

  // Click Delete Post

  clickDeleteButton() {
      let button = $('.btn-delete');

      if (button ){
        button.addEventListener("click", this.delete, false);
      }

  }

  // Delete

  delete(e){
    e.preventDefault();

      let url = api_url + "todo/" + this.dataset.id;
      let headers = {'Content-Type':'text/html'}

      fetch(url, { method: 'DELETE', headers}).then(res => {
        alert('Todo deletado');
        location.href = api_url + "todos"
      })

  }

  // Submit Form

  submitFormUpdate() {
      let form = $('#form-update');

      if(form){
          form.addEventListener("submit", this.update, false);
      }
  }

  // Update

  update(e) {
    e.preventDefault();

    let url = api_url + "todo/" + this.dataset.id;

    let headers = {'Content-Type':'application/json'}

    let body =  JSON.stringify({
  		title: $('input[name="title"]').value, 
  		description: $('input[name="description"]').value,
  		image: $('input[name="image"]').value
	})

    fetch(url, { method: 'PUT', headers, body }).then(res => {
      alert('Post Editado'); 
      location.href = api_url + "todos"
    })


  }

}

// Iniciando Classe

new Form();



