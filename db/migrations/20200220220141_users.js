
exports.up = knex => {
	return knex.schema.createTable("users", tbl => {
		tbl.increments("id").primary();
		tbl.string('password',128).notNullable();
		tbl.string('first_name',50).notNullable();
		tbl.string('last_name',50).notNullable();
		tbl.string('email',62).unique();
		tbl.string('image',500);
		tbl.boolean('blocked').defaultTo(false).notNullable();
		tbl.boolean('active').defaultTo(true).notNullable();
		tbl.specificType("coordinates", "geometry(point, 4326)");
		tbl.dateTime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6)).notNullable();
		tbl.dateTime('updated_at', { precision: 6 });
		tbl.dateTime('deleted_at', { precision: 6 });
		tbl.string('country_code').unsigned();
		tbl.string('origin_country_code').unsigned();
		tbl.integer('city_id').unsigned();
		tbl.integer('origin_city_id').unsigned();
	});
};

exports.down = knex => knex.schema.dropTableIfExists("users");
