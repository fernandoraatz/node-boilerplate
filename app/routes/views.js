/*
|--------------------------------------------------------------------------
| Routes - Views
|--------------------------------------------------------------------------
*/

module.exports = function(app) {

    // Controller - Home

    let views = new app.controllers.views;

    // Configuring route calling API methods

    app.route('/')
        .get(views.renderIndex);

    app.route('/admin/add')
        .get(views.renderForm)

}
