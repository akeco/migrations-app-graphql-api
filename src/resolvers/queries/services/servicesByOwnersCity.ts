export {};
const knex = require('../../../../config/db');

type Params = {
    cityID: number
}

const servicesByOwnersCity = async (_: any, { cityID }: Params) => {
    try {
        const services = await knex('services').join('users', 'users.id', '=', 'services.owner_id').where({ city_code: cityID });
        return services;
    }
    catch (e) {
        console.log("Services error", e);
    }
};

module.exports = servicesByOwnersCity;