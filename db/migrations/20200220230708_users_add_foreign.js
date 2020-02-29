exports.up = (knex) => {
	return knex.schema.table("users", tbl => {
		tbl.foreign('country_code').references('id').inTable('countries');
		tbl.foreign('city_id').references('id').inTable('cities');
		tbl.foreign('origin_country_code').references('id').inTable('countries');
		tbl.foreign('origin_city_id').references('id').inTable('cities');
	});
};

exports.down = (knex) => {
	return knex.schema.table("users", tbl => {
		tbl.dropForeign("country_code");
		tbl.dropForeign('city_id');
		tbl.dropForeign('origin_country_code');
		tbl.dropForeign('origin_city_id');
	});
};