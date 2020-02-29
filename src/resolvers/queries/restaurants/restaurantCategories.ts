export {};
const knex = require('../../../../config/db');

const restaurantCategories = async () => {
    try {
        const categories = await knex('restaurant_categories');
        return categories;
    }
    catch (e) {
        console.log("Restaurant categories error", e);
    }
};

module.exports = restaurantCategories;