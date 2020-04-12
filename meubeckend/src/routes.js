const express = require ('express');

const routes = express.Router();

routes.post('/users',(Request,Response)=>{
    return Response.json({
        evento:'semana oministack',
        aluno:'isael santos'
    });
});
module.exports = routes;