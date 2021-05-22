let app = require('./config/server');
const rotas = require('./app/routes/routes');

rotas.rotaListarUsuarios(app);
rotas.rotaUsuarioSalvar(app);
rotas.rotaListarPosts(app);