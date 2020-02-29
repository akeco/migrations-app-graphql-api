export {};
const knex = require('../../../../config/db');

type Params = {
    lat: number,
    lng: number,
    radius: number
}

const eventsByGeolocation = async (_: any, { lat, lng, radius = 64373.8 }: Params) => {
    try {
        const events = await knex('events').where(knex.postgis.dwithin("coordinates", knex.postgis.geography(knex.postgis.makePoint(lng, lat)), radius));
        return events;
    }
    catch (e) {
        console.log("userss error", e);
    }
};

module.exports = eventsByGeolocation;