/*
|--------------------------------------------------------------------------
| Controller - Todos
|--------------------------------------------------------------------------
*/

let mongoose = require('mongoose');
let model = mongoose.model('Todo'); 

// Views

class Todos {



  list(req, res){
      model.find().then(
        (todos) => {  
            res.format({ 
              'text/html': () => res.render("todos/list", { todos }),
              'application/json': () => res.json(todos)
            })
        },
        (error) => res.sendStatus(500)
      )
      
  }

  save(req,res){ 
    model.create(req.body).then(
      (post) => res.redirect(`todo/${post.id}`),
      (error) => res.sendStatus(500)
    )
  }


    getById(req, res){
      model.findById(req.params.id).then(
          (todo) => res.render("todos/single", { todo }),
          (error) => res.sendStatus(500)
      );
    } 

    // Update

    update(req, res){
        model.findByIdAndUpdate(req.params.id, req.body).then(
            (post) => res.sendStatus(200),    
            (error) => res.sendStatus(500)  
        ); 
    } 

    // Delete

    delete(req, res){
      model.remove({'_id' : req.params.id}).then(
          () => res.sendStatus(200),
          (error) => res.sendStatus(500)
      );
    }

    renderAdd(req, res){ 
      res.render('todos/add');
    }

  // Render Update

  renderUpdate(req, res){
    model.findByIdAndUpdate(req.params.id, req.body).then(
      (todo) => res.render('todos/update', {  todo }),
      (error) => res.sendStatus(500)
    )
  }

 
}

// Export

module.exports = new Todos()
