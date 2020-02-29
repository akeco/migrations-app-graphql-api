const faker = require('faker');

exports.seed = async (knex) => {
  await knex('users').del();
  return knex('cities').del().then(() => {
    return knex('countries').pluck('id').then((countryIds) => {
      let cities = [...Array(150)].map(() => ({
        name: faker.address.city(),
        country_code: faker.random.arrayElement(countryIds)
      }));
      const citiesSet = [...new Set(cities.map(item => item.country_code))];
      cities = citiesSet.map((country_code) => cities.find((item) => item.country_code === country_code));

      return knex("cities").insert(cities);
    });
  })
};