export {};
const knex = require('../../../../config/db');

type Params = {
    lat: number,
    lng: number,
    radius: number,
}

const restaurantsByGeolocation = async (_: any, { lat, lng, radius= 64373.8 }: Params) => {
    try {
        const restaurants = await knex('restaurants').where(knex.postgis.dwithin("coordinates", knex.postgis.geography(knex.postgis.makePoint(lng, lat)), radius));
        return restaurants;
    }
    catch (e) {
        console.log("userss error", e);
    }
};

module.exports = restaurantsByGeolocation;