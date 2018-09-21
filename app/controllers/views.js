/*
|--------------------------------------------------------------------------
| Controller - Views
|--------------------------------------------------------------------------
*/

class Views {

  renderIndex(req, res){
    res.render('index');
  }

  renderForm(req, res){
    res.render('admin/add');
  }

}

// Export

module.exports = function(app){
  return Views;
}
