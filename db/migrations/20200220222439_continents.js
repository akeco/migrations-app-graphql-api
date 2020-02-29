
exports.up = (knex) => {
	return knex.schema.createTable("continents", tbl => {
		tbl.increments("id").unsigned().primary();
		tbl.string('name',50).notNullable();
	});
};

exports.down = knex => knex.schema.dropTableIfExists("continents");
