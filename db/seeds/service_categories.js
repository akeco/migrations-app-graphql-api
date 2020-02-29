const faker = require('faker');

exports.seed = function(knex) {
  const service_categories = [...Array(50)].map(() => ({
    name: faker.random.word()
  }));
  // Deletes ALL existing entries
  return knex('services_categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('services_categories').insert(service_categories);
    });
};
