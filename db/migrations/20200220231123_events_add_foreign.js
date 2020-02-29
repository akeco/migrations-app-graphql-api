exports.up = (knex) => {
	return knex.schema.table("events", tbl => {
		tbl.foreign('country_code').references('id').inTable('countries');
		tbl.foreign('origin_country_code').references('id').inTable('countries');
		tbl.foreign('city_id').references('id').inTable('cities');
		tbl.foreign('owner_id').references('id').inTable('users');
		tbl.foreign('category_id').references('id').inTable('event_categories');
	});
};

exports.down = (knex) => {
	return knex.schema.table("events", tbl => {
		tbl.dropForeign("country_code");
		tbl.dropForeign("origin_country_code");
		tbl.dropForeign("city_id");
		tbl.dropForeign("owner_id");
		tbl.dropForeign("category_id");
	});
};