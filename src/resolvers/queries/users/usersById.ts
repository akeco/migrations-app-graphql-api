export {};
const knex = require('../../../../config/db');

type Params = {
    userID: number
}

const usersById = async (_: any, {userID}: Params) => {
    try {
        const users = await knex('users').where({ id: userID });
        return users;
    }
    catch (e) {
        console.log("userss error", e);
    }
};

module.exports = usersById;