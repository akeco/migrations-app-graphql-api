const faker = require('faker');

exports.seed = (knex) => {
  return knex('event_categories').del().then(() => {
    const types = [...Array(50)].map(() => ({
      name: faker.lorem.slug(),
    }));

    return knex("event_categories").insert(types);
  })
};