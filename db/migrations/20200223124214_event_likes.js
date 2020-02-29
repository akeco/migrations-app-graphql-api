
exports.up = knex => {
	return knex.schema.createTable("event_likes", tbl => {
		tbl.increments("id").primary();
		tbl.integer('event_id').notNullable();
		tbl.integer('owner_id').notNullable();
	});
};

exports.down = knex => knex.schema.dropTableIfExists("event_likes");
