const faker = require('faker');

exports.seed = (knex) => {
  return knex('restaurant_categories').del().then(() => {
    const types = [...Array(50)].map(() => ({
      name: faker.name.jobType(),
    }));

    return knex("restaurant_categories").insert(types);
  })
};