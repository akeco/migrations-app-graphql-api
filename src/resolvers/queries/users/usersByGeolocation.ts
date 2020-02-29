export {};
const knex = require('../../../../config/db');

type Params = {
    input: {
        lat: number,
        lng: number,
        radius: number,
    }
}

const usersByGeolocation = async (_: any, { input: { lat, lng, radius= 64373.8 } }: Params) => {
    try {
        const users = await knex('users').where(knex.postgis.dwithin("coordinates", knex.postgis.geography(knex.postgis.makePoint(lng, lat)), radius));
        return users;
    }
    catch (e) {
        console.log("userss error", e);
    }
};

module.exports = usersByGeolocation;