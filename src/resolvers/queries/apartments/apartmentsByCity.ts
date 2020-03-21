export {};
const knex = require('../../../../config/db');

type Params = {
    cityID: number
}

const apartmentsByCity = async (_: any, { cityID }: Params) => {
    try {
        const apartments = await knex('apartments').where({ city_id: cityID });
        return apartments;
    }
    catch (e) {
        console.log("restaurants error", e);
    }
};

module.exports = apartmentsByCity;