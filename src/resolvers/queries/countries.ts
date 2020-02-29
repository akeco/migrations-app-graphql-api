export {};
const knex = require('../../../config/db.js');

const countries = async () => {
    try {
        const countries = await knex('countries');
        return countries;
    }
    catch (e) {
        console.log("countries error", e);
    }
};

module.exports = countries;