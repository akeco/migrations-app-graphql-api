
exports.up = knex => {
	return knex.schema.createTable("event_categories", tbl => {
		tbl.increments("id").primary();
		tbl.string('name', 50).notNullable();
	});
};

exports.down = knex => knex.schema.dropTableIfExists("event_categories");
