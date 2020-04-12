const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {id} = request.body;

        const guia = await connection('guias')
        .where('id', id)
        .select('nome')
        .first();
        if(!guia){
            return response.status(400).json({error: 'Não foi encontrado o guia especificado'});

        }
        return response.json(guia);
    }
}