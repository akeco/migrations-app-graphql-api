
exports.seed = async (knex) => {
  const continents = [{name: 'europe'}, {name: 'asia'}, {name: 'africa'}, {name: 'australia'}];
  // Deletes ALL existing entries
  await knex('cities').del();
  await knex('countries').del();
  return knex('continents').del()
    .then(function () {
      // Inserts seed entries
      return knex('continents').insert(continents);
    });
};
