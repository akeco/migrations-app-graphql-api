export {};
const knex = require('../../../../config/db');

type Params = {
    countryCode: string
}

const servicesByOwnersOriginCountry = async (_: any, { countryCode }: Params) => {
    try {
        const services = await knex('services').join('users', 'users.id', '=', 'services.owner_id').where({ origin_country_code: countryCode });
        return services;
    }
    catch (e) {
        console.log("Services error", e);
    }
};

module.exports = servicesByOwnersOriginCountry;