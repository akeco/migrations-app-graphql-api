
exports.up = (knex) => {
	return knex.schema.alterTable('events', (tbl) => {
		tbl.string('address',128).alter();
		tbl.string('email',62).alter();
		tbl.string('phone_number', 30).alter();
	});
};

exports.down = function(knex) {

};
