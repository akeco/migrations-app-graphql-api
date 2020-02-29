export {};
const knex = require('../../../../config/db');

type Params = {
    ownerID: number
}

const restaurantsByOwner = async (_: any, { ownerID }: Params) => {
    try {
        const restaurants = await knex('restaurants').where({ owner_id: ownerID });
        return restaurants;
    }
    catch (e) {
        console.log("restaurants error", e);
    }
};

module.exports = restaurantsByOwner;