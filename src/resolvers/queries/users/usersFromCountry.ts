export {};
const knex = require('../../../../config/db');

type Params = {
    countryCode: string
}

const usersFromCountry = async (_: any, {countryCode}: Params) => {
    try {
        const users = await knex('users').where({ country_code: countryCode });
        return users;
    }
    catch (e) {
        console.log("userss error", e);
    }
};

module.exports = usersFromCountry;