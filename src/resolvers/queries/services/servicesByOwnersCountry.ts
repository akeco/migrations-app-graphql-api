export {};
const knex = require('../../../../config/db');

type Params = {
    countryCode: string
}

const servicesByOwnersCountry = async (_: any, { countryCode }: Params) => {
    try {
        const services = await knex('services').join('users', 'users.id', '=', 'services.owner_id').where({ country_code: countryCode });
        return services;
    }
    catch (e) {
        console.log("Services error", e);
    }
};

module.exports = servicesByOwnersCountry;