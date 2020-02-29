const faker = require('faker');

exports.seed = (knex) => {
  return knex('apartment_comments').del().then(async () => {
    const apartmentIDs = await knex('apartments').pluck('id');
    const ownerIDs = await knex('users').pluck('id');

    const apartments = [...Array(100)].map(() => ({
      apartment_id: faker.random.arrayElement(apartmentIDs),
      owner_id: faker.random.arrayElement(ownerIDs),
      text: faker.lorem.paragraph()
    }));

    return knex("apartment_comments").insert(apartments);
  })
};