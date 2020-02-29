
exports.up = (knex) => {
	return knex.schema.createTable("cities", tbl => {
		tbl.increments("id").unsigned().primary();
		tbl.string('name',100).notNullable();
		tbl.string('country_code').unsigned();
	});
};

exports.down = (knex) => knex.schema.dropTableIfExists("cities");
