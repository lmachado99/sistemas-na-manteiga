const usuariocontroller = require('../controllers/usuarioController');
const controllerposts  = require('../controllers/postController');
const {validationResult} = require("express-validator");

module.exports = {

    rotaListarUsuarios: function (app) {   
        app.get('/usuarios', function (req, res) {
            usuariocontroller.usuariosListar(app, req, res);
        })
    },

    rotaUsuarioSalvar: function (app) {
        app.post('/horario/marcar', function (req, res) {
            const errors = validationResult(req);
            usuariocontroller.usuariosSalvar(app, req, res, errors);
        });
    },

    rotaListarPosts: function (app) {
        app.get('/horario/mostrar', function (req, res) {
            controllerposts.postsListar(app, req, res);
        });
    }
}