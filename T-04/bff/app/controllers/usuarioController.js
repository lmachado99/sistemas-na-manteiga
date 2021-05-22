const dbConnection = require('../../config/dbConnection');	
const usuariosModel = require('../models/usuarioModel');	

module.exports.usuariosListar = function (app, req, res) {	
    const connection = dbConnection();	
    
    usuariosModel.getusuario(connection, function (err, results) {	
        if (!err) {	
            res.json(results);	
        } else {	
            console.log("Erro:", err);	
            let pagina = "<h1>Erro encontrado</h1><h2>" + err + "</h2>";	
            res.send(pagina);	
        }	

    });	
}	

module.exports.usuariosSalvar = function (app, req, res, errors) {	
    let usuarios = req.body;

    if(!errors.isEmpty()){	

        let erros = errors.array();	
        console.log(erros);	
        res.render('./home');	
        return;	
    }	

    const connection = dbConnection();	

    usuariosModel.setusuario(usuarios, connection, function (err, result) {	
        if (!err) {	
            res.redirect('/usuarios');	
        } else {	
            console.log("Erro: ", err);	
            let pagina = "<h1> Erro encontrado </h1> <h2>" + err + "</h2>";	
            res.send(pagina);	
        }	
    });	
}