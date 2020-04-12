
exports.up = function(knex) {
  return knex.schema.createTable('guias', function (table){
    table.string('id').primary();
    table.string('nome').notNullable();
    table.string('email').notNullable();
    table.string('cpf').notNullable();
    table.string('telefone').notNullable();
    table.string('nc').notNullable();
    table.string('descricao').notNullable();
    table.string('idiomas').notNullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('guias');
};
