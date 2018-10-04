class FormTodo {

  constructor(){
      this.submitFormTodo();
  }

   // Submit Form Todo

   submitFormTodo() {
      let formTodo = $('#add-todo');

      if(formTodo){
        formTodo.addEventListener("submit", this.insertTodo, false);
      }
  }

  insertTodo(e) {
    e.preventDefault();

    let url = api_url + "todos"
    let imageElement = $('input[name="image"]')

    let headers = {
      'Content-Type':'application/json',
      'filename': imageElement.files[0].name
    } 

    let dados =  JSON.stringify({
  		title: $('input[name="title"').value,
      description: $('input[name="description"').value,
      isChecked: false,
      image: imageElement.files[0]
   }) 

  
    fetch(url, { method: 'POST', headers,  body: dados }).then(res => {
      alert('Todo Enviado'); 
      location.href = api_url + "posts"
    })


  }




} 

// new FormTodo();

