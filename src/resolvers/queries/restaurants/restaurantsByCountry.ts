export {};
const knex = require('../../../../config/db');

type Params = {
    countryCode: string
}

const restaurantsByCountry = async (_: any, { countryCode }: Params) => {
    try {
        const restaurants = await knex('restaurants').where({ country_code: countryCode });
        return restaurants;
    }
    catch (e) {
        console.log("restaurants error", e);
    }
};

module.exports = restaurantsByCountry;