export {};
const knex = require('../../../../config/db.js');

type Params = {
    input: {
        event_id: number,
        owner_id: number,
        text: string,
    }
}

const createEventComment = async (_: any, { input: { event_id, owner_id, text } }: Params) => {
    try {
        const comment = await knex('event_comments')
            .insert({ event_id, owner_id, text })
            .returning(['id', 'eventId', 'ownerId', 'text', 'createdAt'])
            .first();

        return comment;
    }
    catch (e) {
        console.log("comment error", e);
    }
};

module.exports = createEventComment;