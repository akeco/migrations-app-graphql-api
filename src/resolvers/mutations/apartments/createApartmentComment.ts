export {};
const knex = require('../../../../config/db.js');

type Params = {
    input: {
        apartment_id: number,
        owner_id: number,
        text: string,
    }
}

const createApartmentComment = async (_: any, { input: { apartment_id, owner_id, text } }: Params) => {
    try {
        const comment = await knex('apartment_comments')
            .insert({ apartment_id, owner_id, text })
            .returning(['id', 'apartmentId', 'ownerId', 'text', 'createdAt']);

        if (comment.length === 1) return comment[0];
        return comment;
    }
    catch (e) {
        console.log("user error", e);
    }
};

module.exports = createApartmentComment;