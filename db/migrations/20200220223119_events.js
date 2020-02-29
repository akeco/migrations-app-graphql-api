
exports.up = knex => {
	return knex.schema.createTable("events", tbl => {
		tbl.increments("id").unsigned().primary();
		tbl.string('title',50).notNullable();
		tbl.integer('category_id').unsigned();
		tbl.string('description',1000).notNullable();
		tbl.string('address',128).notNullable();
		tbl.string('email',62).notNullable();
		tbl.string('phone_number', 30).notNullable();
		tbl.string('image',500);
		tbl.dateTime('event_date_time', { precision: 6 }).notNullable();
		tbl.specificType("coordinates", "geometry(point, 4326)");
		tbl.integer('likes').defaultTo(0);
		tbl.integer('dislikes').defaultTo(0);
		tbl.boolean('promoting').defaultTo(false).notNullable();
		tbl.dateTime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6)).notNullable();
		tbl.dateTime('updated_at', { precision: 6 });
		tbl.dateTime('deleted_at', { precision: 6 });
		tbl.integer('owner_id').unsigned();
		tbl.string('country_code').unsigned();
		tbl.string('origin_country_code').unsigned();
		tbl.integer('city_code').unsigned();
	});
};

exports.down = knex => knex.schema.dropTableIfExists("events");
