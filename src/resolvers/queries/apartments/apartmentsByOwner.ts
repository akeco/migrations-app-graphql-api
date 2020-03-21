export {};
const knex = require('../../../../config/db');
const get = require('../../../utils/get');

type Params = {
    ownerID: number
}

const apartmentsByOwner: Function = async (owner: any, { ownerID }: Params) : Promise<{} | Error> => {
    const id : string = get(owner, 'id') || ownerID;

    try {
        const apartments = await knex('apartments').where({ owner_id: id });
        return apartments;
    }
    catch (e) {
        console.log("apartments error", e);
    }
};

module.exports = apartmentsByOwner;