const express = require ('express');

const guiaController = require('./controllers/guiaController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post('/sessions',sessionController.create)

routes.get('/guias',guiaController.index);
routes.post('/guias', guiaController.create);
routes.delete('/guias/:id', guiaController.delete);
module.exports = routes;