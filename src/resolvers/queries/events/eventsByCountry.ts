export {};
const knex = require('../../../../config/db');

type Params = {
    countryCode: string
}

const eventsByCountry = async (_: any, { countryCode }: Params) => {
    try {
        const events = await knex('events').where({ country_code: countryCode });
        return events;
    }
    catch (e) {
        console.log("events error", e);
    }
};

module.exports = eventsByCountry;