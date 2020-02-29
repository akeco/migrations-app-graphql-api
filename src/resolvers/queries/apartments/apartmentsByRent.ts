export {};
const knex = require('../../../../config/db');

type Params = {
    renting: boolean
}

const apartmentsByRent = async (_: any, { renting }: Params) => {
    try {
        const apartments = await knex('apartments').where({ renting });
        return apartments;
    }
    catch (e) {
        console.log("apartments error", e);
    }
};

module.exports = apartmentsByRent;