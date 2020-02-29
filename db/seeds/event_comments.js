const faker = require('faker');

exports.seed = (knex) => {
  return knex('event_comments').del().then(async () => {
    const eventIDs = await knex('events').pluck('id');
    const ownerIDs = await knex('users').pluck('id');

    const apartments = [...Array(100)].map(() => ({
      event_id: faker.random.arrayElement(eventIDs),
      owner_id: faker.random.arrayElement(ownerIDs),
      text: faker.lorem.paragraph()
    }));

    return knex("event_comments").insert(apartments);
  })
};