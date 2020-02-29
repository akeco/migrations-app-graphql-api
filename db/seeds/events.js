const faker = require('faker');
const { postgis } = require('../../config/db');
const st = postgis;

exports.seed = (knex) => {
  return knex('events').del().then(async () => {
    const categoryIDs = await knex('event_categories').pluck('id');
    const ownerIDs = await knex('users').pluck('id');
    const countryIDs = await knex('countries').pluck('id');
    const cityIDs = await knex('cities').pluck('id');

    const events = [...Array(10)].map((item, index) => ({
      title: faker.lorem.words(),
      description: faker.lorem.paragraph(),
      phone_number: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
      image: faker.image.imageUrl(),
      coordinates: st.setSRID(st.makePoint(faker.address.longitude(), faker.address.latitude()), 4326),
      event_date_time: `2020-02-${index + 10} 18:17:10`,
      category_id: faker.random.arrayElement(categoryIDs),
      owner_id: faker.random.arrayElement(ownerIDs),
      country_code: faker.random.arrayElement(countryIDs),
      city_id: faker.random.arrayElement(cityIDs),
    }));

    return knex("events").insert(events);
  })
};