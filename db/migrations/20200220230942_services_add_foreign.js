exports.up = (knex) => {
	return knex.schema.table("services", tbl => {
		tbl.foreign('category_id').references('id').inTable('services_categories');
		tbl.foreign('owner_id').references('id').inTable('users');
	});
};

exports.down = (knex) => {
	return knex.schema.table("services", tbl => {
		tbl.dropForeign("category_id");
		tbl.dropForeign("owner_id");
	});
};