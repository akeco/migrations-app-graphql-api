export {};
const knex = require('../../../../config/db');

type Params = {
    cityID: number
}

const eventsByCity = async (_: any, { cityID }: Params) => {
    try {
        const events = await knex('events').where({ city_id: cityID });
        return events;
    }
    catch (e) {
        console.log("events error", e);
    }
};

module.exports = eventsByCity;