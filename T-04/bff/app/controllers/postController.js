const dbConnection = require('../../config/dbConnection');	
const postsModel = require('../models/postModel');	

module.exports.postsListar = function (app, req, res) {	
    const connection = dbConnection();
    postsModel.getposts(connection, function (err, results) {	
        
        if (!err) {	
            console.log(results);	
            res.send(results);	
        } else {	
            console.log("Erro:", err);	
            let pagina = "<h1>Erro encontrado</h1><h2>" + err + "</h2>";	
            res.send(pagina);	
        }	
    });	
}