/*
|--------------------------------------------------------------------------
| Routes - Images
|--------------------------------------------------------------------------
*/

module.exports = (app) => {

    let images = app.controllers.images;

    app.route('/images')
        .get(images.list); 
    
    app.route('/images/upload')
        .get(images.render)
        .post(images.upload)

}
