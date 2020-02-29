
exports.up = knex => {
	return knex.schema.createTable("services_categories", tbl => {
		tbl.increments("id").primary();
		tbl.string('name', 50).notNullable();
	});
};

exports.down = knex => knex.schema.dropTableIfExists("services_categories");
