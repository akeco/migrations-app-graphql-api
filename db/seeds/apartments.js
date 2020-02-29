const faker = require('faker');
const { postgis } = require('../../config/db');
const st = postgis;

exports.seed = (knex) => {
  return knex('apartments').del().then(async () => {
    const ownerIDs = await knex('users').pluck('id');
    const countryIDs = await knex('countries').pluck('id');
    const cityIDs = await knex('cities').pluck('id');

    const apartments = [...Array(100)].map(() => ({
      title: faker.lorem.words(),
      description: faker.lorem.paragraphs(),
      image: faker.image.imageUrl(),
      coordinates: st.setSRID(st.makePoint(faker.address.longitude(), faker.address.latitude()), 4326),
      phone_number: faker.phone.phoneNumber(),
      renting: faker.random.arrayElement([true, false]),
      owner_id: faker.random.arrayElement(ownerIDs),
      country_code: faker.random.arrayElement(countryIDs),
      city_id: faker.random.arrayElement(cityIDs),
    }));

    return knex("apartments").insert(apartments);
  })
};