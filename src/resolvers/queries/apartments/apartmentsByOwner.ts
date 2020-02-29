export {};
const knex = require('../../../../config/db');

type Params = {
    ownerID: number
}

const apartmentsByOwner = async (_: any, { ownerID }: Params) => {
    try {
        const apartments = await knex('apartments').where({ owner_id: ownerID });
        return apartments;
    }
    catch (e) {
        console.log("apartments error", e);
    }
};

module.exports = apartmentsByOwner;