export {};
const knex = require('../../../../config/db');

type Params = {
    cityID: number
}

const restaurantsByCity = async (_: any, { cityID }: Params) => {
    try {
        const restaurants = await knex('restaurants').where({ city_code: cityID });
        return restaurants;
    }
    catch (e) {
        console.log("restaurants error", e);
    }
};

module.exports = restaurantsByCity;