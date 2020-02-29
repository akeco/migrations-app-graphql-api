
exports.up = knex => {
	return knex.schema.createTable("services", tbl => {
		tbl.increments("id").primary();
		tbl.string('type',100).notNullable();
		tbl.string('description',300);
		tbl.string('phone_number',30);
		tbl.integer('category_id').unsigned();
		tbl.integer('owner_id').unsigned();
	});
};

exports.down = knex => knex.schema.dropTableIfExists("services");
