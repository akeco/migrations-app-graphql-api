const faker = require('faker');

exports.seed = (knex) => {
  return knex('services').del().then(async () => {
    const categoryIDs = await knex('services_categories').pluck('id');
    const ownerIDs = await knex('users').pluck('id');

    const services = [...Array(100)].map(() => ({
      type: faker.commerce.productName(),
      description: faker.commerce.product(),
      phone_number: faker.phone.phoneNumber(),
      category_id: faker.random.arrayElement(categoryIDs),
      owner_id: faker.random.arrayElement(ownerIDs)
    }));

    return knex("services").insert(services);
  })
};