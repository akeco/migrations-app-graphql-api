const faker = require('faker');
const { postgis } = require('../../config/db');
const st = postgis;

exports.seed = async (knex) => {
  const countryCodes = await knex('countries').pluck('id');
  const cityIDs = await knex('cities').pluck('id');
  let usersList = [...Array(500)].map(() => ({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    image: faker.image.avatar(),
    password: 'test_pass',
    coordinates: st.setSRID(st.makePoint(faker.address.longitude(), faker.address.latitude()), 4326),
    country_code: faker.random.arrayElement(countryCodes),
    city_id: faker.random.arrayElement(cityIDs),
    origin_country_code: faker.random.arrayElement(countryCodes),
    origin_city_id: faker.random.arrayElement(cityIDs),
  }));
  const usersSet = [...new Set(usersList.map(item => item.email))];
  usersList = usersSet.map((email) => usersList.find((item) => item.email === email));

  // Deletes ALL existing entries
  await knex('restaurants').del();
  await knex('services').del();
  await knex('events').del();
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(usersList);
    })
};
