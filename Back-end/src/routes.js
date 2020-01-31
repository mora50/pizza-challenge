const express = require('express');
const routes = express.Router();
const DemandController = require('./controllers/DemandController');
const PizzaController = require('./controllers/PizzaController');

routes.get('/demand', DemandController.index);

routes.get('/demand/:id', DemandController.show);

routes.post('/demand', DemandController.store);

//Método de atualização é o PUT
routes.put('/demand/:id', DemandController.update);

routes.delete('/demand/:id', DemandController.destroy);

routes.get('/pizzaparts', PizzaController.pizzaParts);

module.exports = routes;

