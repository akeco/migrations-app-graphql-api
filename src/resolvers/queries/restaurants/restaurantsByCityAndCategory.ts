export {};
const knex = require('../../../../config/db');

type Params = {
    cityID: number,
    categoryID: number,
}

const restaurantsByCityAndCategory = async (_: any, { cityID, categoryID }: Params) => {
    try {
        const restaurants = await knex('restaurants').where({ city_code: cityID, category_id: categoryID });
        return restaurants;
    }
    catch (e) {
        console.log("restaurants error", e);
    }
};

module.exports = restaurantsByCityAndCategory;