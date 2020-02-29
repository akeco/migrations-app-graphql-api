export {};
const knex = require('../../../../config/db');

type Params = {
    cityID: string
}

const usersFromCity = async (_: any, {cityID}: Params) => {
    try {
        const users = await knex('users').where({ city_code: cityID });
        return users;
    }
    catch (e) {
        console.log("userss error", e);
    }
};

module.exports = usersFromCity;