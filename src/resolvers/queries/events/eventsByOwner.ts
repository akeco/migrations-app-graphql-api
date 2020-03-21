export {};
const knex = require('../../../../config/db');
const get = require('../../../utils/get');

type Params = {
    ownerID: number
}

const eventsByOwner = async (parent: { id: number }, { ownerID }: Params) => {
    try {
        const id = get(parent, 'id') || ownerID;
        const events = await knex('events').where({ owner_id: id });
        return events;
    }
    catch (e) {
        console.log("events error", e);
    }
};

module.exports = eventsByOwner;