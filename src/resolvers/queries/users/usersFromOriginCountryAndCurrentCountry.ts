export {};
const knex = require('../../../../config/db');

type Params = {
    originCountryCode: string,
    currentCountryCode: string,
}

const usersFromOriginCountryAndCurrentCountry = async (_: any, {originCountryCode, currentCountryCode}: Params) => {
    try {
        const users = await knex('users').where({ origin_country_code: originCountryCode, country_code: currentCountryCode });
        return users;
    }
    catch (e) {
        console.log("userss error", e);
    }
};

module.exports = usersFromOriginCountryAndCurrentCountry;