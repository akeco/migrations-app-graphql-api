export {};
const knex = require('../../../config/db.js');

const cities = async () => {
    try {
        const cities = await knex('cities');
        return cities;
    }
    catch (e) {
        console.log("cities error", e);
    }
};

module.exports = cities;