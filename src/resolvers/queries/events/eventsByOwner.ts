export {};
const knex = require('../../../../config/db');

type Params = {
    ownerID: number
}

const eventsByOwner = async (_: any, { ownerID }: Params) => {
    try {
        const events = await knex('events').where({ owner_id: ownerID });
        return events;
    }
    catch (e) {
        console.log("events error", e);
    }
};

module.exports = eventsByOwner;