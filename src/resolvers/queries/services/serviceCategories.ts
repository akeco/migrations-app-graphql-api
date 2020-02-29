export {};
const knex = require('../../../../config/db');

const serviceCategories = async () => {
    try {
        const categories = await knex('services_categories');
        return categories;
    }
    catch (e) {
        console.log("Service categories error", e);
    }
};

module.exports = serviceCategories;