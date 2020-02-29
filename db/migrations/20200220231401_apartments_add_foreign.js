exports.up = (knex) => {
	return knex.schema.table("apartments", tbl => {
		tbl.foreign('country_code').references('id').inTable('countries');
		tbl.foreign('city_id').references('id').inTable('cities');
		tbl.foreign('owner_id').references('id').inTable('users');
	});
};

exports.down = (knex) => {
	return knex.schema.table("apartments", tbl => {
		tbl.dropForeign("country_code");
		tbl.dropForeign("city_id");
		tbl.dropForeign("owner_id");
	});
};
