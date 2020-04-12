const connection = require('../database/connection');

module.exports = {
    async index (request,response) {
        const {page = 1} = request.query;

        const [count] = await connection('guias').count();
    
        const guias = await connection('guias')
        .limit(5)
        .offset((page -1)*5)
        .select('*');
        
        response.header('X-Total-Count', count['count(*)']);

        return response.json(guias);
    },
    async create(request, response){
        const {nome, email, cpf, telefone, nc, descricao, idiomas} = request.body;
    const id = cpf

    await connection('guias').insert({
     nome,
     id,
     email,
     cpf,
     telefone,
     nc,
     descricao,
     idiomas,  
    })
    return response.json({id});
    },
    async delete(request, response){
        const {id} = request.params;
        const guia = await connection('guias')
         .where('id',id)
         .first();
    await connection ('guias').where('id',id).delete();
    return response.status(204).send();
    }
};