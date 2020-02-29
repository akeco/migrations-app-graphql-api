export {};
const knex = require('../../../../config/db');

type Params = {
    ownerID: number
}

const servicesByOwner = async (_: any, { ownerID }: Params) => {
    try {
        const services = await knex('services').where({ owner_id: ownerID });
        return services;
    }
    catch (e) {
        console.log("Services error", e);
    }
};

module.exports = servicesByOwner;