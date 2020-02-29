export {};
const knex = require('../../../config/db.js');

const continents = async () => {
    try {
        const continents = await knex('continents');
        return continents;
    }
    catch (e) {
        console.log("Continents error", e);
    }
};

module.exports = continents;