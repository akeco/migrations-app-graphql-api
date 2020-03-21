export {};
const knex = require('../../../../config/db');

type Params = {
    userID: number
}

const usersById = async (parent : any, {userID}: Params) => {

    console.log("PAR", parent)
    try {
        let id = parent.id || userID;
        const users = await knex('users').where({ id });
        return users;
    }
    catch (e) {
        console.log("userss error", e);
    }
};

module.exports = usersById;