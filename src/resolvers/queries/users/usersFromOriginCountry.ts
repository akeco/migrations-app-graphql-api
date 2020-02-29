export {};
const knex = require('../../../../config/db');

type Params = {
    originCountryCode: string
}

const usersFromOriginCountry = async (_: any, {originCountryCode}: Params) => {
    try {
        const users = await knex('users').where({ origin_country_code: originCountryCode });
        return users;
    }
    catch (e) {
        console.log("userss error", e);
    }
};

module.exports = usersFromOriginCountry;