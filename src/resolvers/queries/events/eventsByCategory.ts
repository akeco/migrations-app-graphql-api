export {};
const knex = require('../../../../config/db');

type Params = {
    categoryID: number,
}

const eventsByCategory = async (_: any, { categoryID }: Params) => {
    try {
        const result = await knex
            .select(['*'])
            .distinct('events.id')
            .from('events')
            .where({ 'events.category_id': categoryID })
            .leftJoin('event_likes', 'events.id', '=', 'event_likes.event_id')
            .count('event_likes.id as likes')
            .groupBy('event_likes.id')
            .groupBy('events.id');

        console.log("RES", result)
        return result;
    }
    catch (e) {
        console.log("events error", e);
    }
};

module.exports = eventsByCategory;