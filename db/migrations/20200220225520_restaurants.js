
exports.up = knex => {
	return knex.schema.createTable("restaurants", tbl => {
		tbl.increments("id").primary();
		tbl.string('name', 100).notNullable();
		tbl.string('email',62);
		tbl.string('image',500);
		tbl.string('description',1000);
		tbl.string('address',128).notNullable();
		tbl.string('phone_number', 30).notNullable();
		tbl.decimal('rating').defaultTo(0);
		tbl.specificType("coordinates", "geometry(point, 4326)");
		tbl.string('opens', 5);
		tbl.string('closes', 5);
		tbl.boolean('promoting').defaultTo(false);
		tbl.dateTime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6)).notNullable();
		tbl.dateTime('updated_at', { precision: 6 });
		tbl.dateTime('deleted_at', { precision: 6 });
		tbl.integer('category_id').unsigned();
		tbl.integer('owner_id').unsigned();
		tbl.string('country_code').unsigned();
		tbl.integer('city_id').unsigned();
		tbl.string('origin_country_code').unsigned();
	});
};

exports.down = knex => knex.schema.dropTableIfExists("restaurants");
