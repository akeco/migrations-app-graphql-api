exports.up = (knex) => {
	return knex.schema.table("countries", tbl => {
		tbl.foreign('continent_id').references('id').inTable('continents');
	});
};

exports.down = (knex) => {
	return knex.schema.table("countries", tbl => {
		tbl.dropForeign("continent_id");
	});
};