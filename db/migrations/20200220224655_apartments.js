
exports.up = knex => {
	return knex.schema.createTable("apartments", tbl => {
		tbl.increments("id").unsigned().primary();
		tbl.string('title',50).notNullable();
		tbl.string('description',1000).notNullable();
		tbl.string('image',500);
		tbl.string('phone_number',30);
		tbl.string('email',62);
		tbl.string('address',128);
		tbl.specificType("coordinates", "geometry(point, 4326)");
		tbl.boolean('active').defaultTo(true).notNullable();
		tbl.boolean('renting').notNullable();
		tbl.dateTime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6)).notNullable();
		tbl.date('updated_at');
		tbl.date('deleted_at');
		tbl.string('country_code').unsigned();
		tbl.integer('city_id').unsigned();
		tbl.integer('owner_id').unsigned();
	});
};

exports.down = knex => knex.schema.dropTableIfExists("apartments");
