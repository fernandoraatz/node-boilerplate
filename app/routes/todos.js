/*
|--------------------------------------------------------------------------
| Routes - Todos
|--------------------------------------------------------------------------
*/

module.exports = (app) => {

    let todos = app.controllers.todos; 

    app.route('/')
        .get(todos.list);

    app.route('/todos')
        .get(todos.list)
        .post(todos.save);
    
    app.route('/todos/add')
        .get(todos.renderAdd); 

    app.route('/todos/update/:id')
        .get(todos.renderUpdate)

    app.route('/todo/:id')
        .get(todos.getById)
        .put(todos.update)
        .delete(todos.delete);

}
