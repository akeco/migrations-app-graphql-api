export {};
const knex = require('../../../../config/db');

type Params = {
    categoryID: number
}

const servicesByCategory = async (_: any, { categoryID }: Params) => {
    try {
        const services = await knex('services').where({ category_id: categoryID });
        return services;
    }
    catch (e) {
        console.log("Services error", e);
    }
};

module.exports = servicesByCategory;