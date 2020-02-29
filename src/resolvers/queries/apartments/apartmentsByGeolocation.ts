export {};
const knex = require('../../../../config/db');

type Params = {
    lat: number,
    lng: number,
    radius: number,
}

const apartmentsByGeolocation = async (_: any, { lat, lng, radius= 64373.8 }: Params) => {
    try {
        const apartments = await knex('apartments').where(knex.postgis.dwithin("coordinates", knex.postgis.geography(knex.postgis.makePoint(lng, lat)), radius));
        return apartments;
    }
    catch (e) {
        console.log("userss error", e);
    }
};

module.exports = apartmentsByGeolocation;