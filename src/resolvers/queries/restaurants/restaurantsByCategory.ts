export {};
const knex = require('../../../../config/db');

type Params = {
    categoryID: number
}

const restaurantsByCategory = async (_: any, { categoryID }: Params) => {
    try {
        const restaurants = await knex('restaurants').where({ category_id: categoryID });
        return restaurants;
    }
    catch (e) {
        console.log("restaurants error", e);
    }
};

module.exports = restaurantsByCategory;