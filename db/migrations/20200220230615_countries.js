
exports.up = (knex) => {
	return knex.schema.createTable("countries", tbl => {
		tbl.string("id", 10).primary();
		tbl.string('name',100).notNullable();
		tbl.integer('continent_id').unsigned();
	});
};

exports.down = knex => knex.schema.dropTableIfExists("countries");
