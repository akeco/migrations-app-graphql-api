
exports.up = (knex) => {
	return knex.schema.alterTable('events', (tbl) => {
		tbl.dropColumn('city_code');
		tbl.integer('city_id').unsigned();
	});
};

exports.down = function(knex) {

};
