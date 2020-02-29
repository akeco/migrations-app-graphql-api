
exports.up = (knex) => {
	return knex.schema.alterTable('events', (tbl) => {
		tbl.dropColumn('dislikes');
		tbl.dropColumn('likes');
	});
};

exports.down = function(knex) {

};
