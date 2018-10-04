/*
|--------------------------------------------------------------------------
| Controller - Images
|--------------------------------------------------------------------------
*/

// Import Modules

var fs = require('fs');
var path = require('path');
var image_folder = 'app/static/images';

// Images 

class Images {

    // Render and List 

    list(req,res){
      fs.readdir(image_folder, (error, files) => {
        if(!error){
            res.render("images/list", { files }) 
        }else{
            res.sendStatus(500)
        }
      })

    }

     // Render Upload

     render(req, res){ 
        res.render('images/upload');
    }

    // Upload 

    upload(req, res){
        let filename = req.headers.filename;

        console.log(filename)

        req.pipe(
            fs.createWriteStream("app/static/images/" + filename)
        ).on('finish', () => {
            res.status(201).send('Arquivo Enviado :' + filename);
        }); 
  
    }
    

}

// Exporting API


module.exports = new Images()
