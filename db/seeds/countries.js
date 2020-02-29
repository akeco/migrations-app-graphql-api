const faker = require('faker');

exports.seed = async (knex) => {
  await knex('users').del();
  await knex('cities').del();
  return knex('countries').del().then(() => {
    return knex('continents').pluck('id').then((continentIds) => {
      let countries = [...Array(150)].map(() => ({
        id: faker.address.countryCode(),
        name: faker.address.country(),
        continent_id: faker.random.arrayElement(continentIds)
      }));
      const countriesSet = [...new Set(countries.map(item => item.id))];
      countries = countriesSet.map((id) => countries.find((item) => item.id === id));

      return knex("countries").insert(countries);
    });
  })
};