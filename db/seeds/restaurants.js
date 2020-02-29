const faker = require('faker');
const { postgis } = require('../../config/db');
const st = postgis;

exports.seed = (knex) => {
  return knex('restaurants').del().then(async () => {
    const categoryIDs = await knex('restaurant_categories').pluck('id');
    const ownerIDs = await knex('users').pluck('id');
    const countryIDs = await knex('countries').pluck('id');
    const cityIDs = await knex('cities').pluck('id');

    const restaurants = [...Array(40)].map((item, index) => ({
      name: faker.lorem.words(),
      description: faker.lorem.paragraph(),
      phone_number: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
      email: faker.internet.email(),
      image: faker.image.imageUrl(),
      coordinates: st.setSRID(st.makePoint(faker.address.longitude(), faker.address.latitude()), 4326),
      category_id: faker.random.arrayElement(categoryIDs),
      owner_id: faker.random.arrayElement(ownerIDs),
      country_code: faker.random.arrayElement(countryIDs),
      origin_country_code: faker.random.arrayElement(countryIDs),
      city_id: faker.random.arrayElement(cityIDs),
    }));

    return knex("restaurants").insert(restaurants);
  })
};