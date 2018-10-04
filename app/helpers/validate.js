/*
|--------------------------------------------------------------------------
|  Validate
|--------------------------------------------------------------------------
*/

class Validate {

	post(req){
		req.assert("title", "Insira um título").notEmpty();
		req.assert("content", "Insira uma descrição").notEmpty();
		req.assert("brand", "Insira uma Categoria").notEmpty();

		return req.validationErrors();
	}

}

module.exports = new Validate();