exports.up = (knex) => {
	return knex.schema.table("cities", tbl => {
		tbl.foreign('country_code').references('id').inTable('countries');
	});
};

exports.down = (knex) => {
	return knex.schema.table("cities", tbl => {
		tbl.dropForeign("country_code");
	});
};