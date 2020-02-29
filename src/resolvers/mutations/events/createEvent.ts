export {};
const knex = require('../../../../config/db.js');

type Params = {
    input: {
        title: string,
        description: string,
        image?: string,
        address?: string,
        eventDateTime: string,
        coordinates?: Array<number>,
        likes?: number,
        dislikes?: number,
        promoting: boolean,
        phoneNumber?: string,
        ownerId: number,
        countryCode: number,
        originCountryCode: number
        cityId: number
    }
}

const createEvent = async (_: any, { input: {
    title,
    description,
    image,
    address,
    eventDateTime,
    coordinates,
    likes,
    dislikes,
    promoting,
    phoneNumber,
    ownerId,
    countryCode,
    originCountryCode,
    cityId
}}: Params) => {
    try {
        const events = await knex('events')
            .insert({
                title,
                description,
                image,
                address,
                coordinates,
                likes,
                dislikes,
                promoting,
                event_date_time: eventDateTime,
                phone_number: phoneNumber,
                owner_id: ownerId,
                country_code: countryCode,
                origin_country_code: originCountryCode,
                city_id: cityId
            })
            .returning(['*']);

        if (events.length === 1) return events[0];
        return events;
    }
    catch (e) {
        console.log("user error", e);
    }
};

module.exports = createEvent;