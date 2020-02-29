export {};
const knex = require('../../../../config/db');

type Params = {
    lat: number,
    lng: number,
    radius: number,
}

const servicesByGeolocation = async (_: any, { lat, lng, radius= 64373.8 }: Params) => {
    try {
        const services = await knex('services')
            .join('users', 'users.id', '=', 'services.owner_id')
            .where(knex.postgis.dwithin("coordinates", knex.postgis.geography(knex.postgis.makePoint(lng, lat)), radius));
        return services;
    }
    catch (e) {
        console.log("services error", e);
    }
};

module.exports = servicesByGeolocation;