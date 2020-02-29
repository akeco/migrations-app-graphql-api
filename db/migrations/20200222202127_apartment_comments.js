
exports.up = knex => {
	return knex.schema.createTable("apartment_comments", tbl => {
		tbl.increments("id").primary();
		tbl.integer('apartment_id').unsigned().notNullable();
		tbl.integer('owner_id').unsigned().notNullable();
		tbl.string('text', 8000).notNullable();
		tbl.dateTime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6)).notNullable();
		tbl.dateTime('updated_at', { precision: 6 });
		tbl.dateTime('deleted_at', { precision: 6 });

		tbl.foreign('apartment_id').references('id').inTable('apartments');
		tbl.foreign('owner_id').references('id').inTable('users');
	});
};

exports.down = knex => knex.schema.dropTableIfExists("apartment_comments");
