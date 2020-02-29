export {};
const knex = require('../../../../config/db.js');

type Params = {
    input: {
        eventId: number,
        ownerId: number
    }
}

const setEventLikeDislike = async (_: any, { input: { eventId, ownerId } }: Params) => {
    try {
        const hasLike = await knex('event_likes').where({ event_id: eventId, owner_id: ownerId });

        if (hasLike.length) {
            const res = await knex('event_likes')
                .where({ event_id: eventId, owner_id: ownerId })
                .del();
            return !!res;
        }

        const res = await knex('event_likes')
            .insert({ event_id: eventId, owner_id: ownerId })
            .returning('id');
        return !!res;
    }
    catch (e) {
        console.log("comment error", e);
    }
};

module.exports = setEventLikeDislike;