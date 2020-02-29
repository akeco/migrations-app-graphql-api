export {};
const knex = require('../../../../config/db');

type Params = {
    countryCode: string
}

const restaurantsByOriginCountry = async (_: any, { countryCode }: Params) => {
    try {
        const restaurants = await knex('restaurants').where({ origin_country_code: countryCode });
        return restaurants;
    }
    catch (e) {
        console.log("restaurants error", e);
    }
};

module.exports = restaurantsByOriginCountry;