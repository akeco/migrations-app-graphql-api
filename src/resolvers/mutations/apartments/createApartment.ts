export {};
const knex = require('../../../../config/db.js');

type Params = {
    input: {
        title: string,
        description: string,
        image: string,
        coordinates: Array<number>,
        phoneNumber: string,
        renting: boolean,
        ownerId: number,
        countryCode: string,
        cityId: number
    }
}

const createApartment = async (_: any, { input: {
    title,
    description,
    image,
    coordinates,
    phoneNumber,
    renting,
    ownerId,
    countryCode,
    cityId
}}: Params) => {
    try {
        const apartments = await knex('apartments')
            .insert({
                title,
                description,
                image,
                coordinates,
                renting,
                phone_number: phoneNumber,
                owner_id: ownerId,
                country_code: countryCode,
                city_id: cityId
            })
            .returning(['*']);

        if (apartments.length === 1) return apartments[0];
        return apartments;
    }
    catch (e) {
        console.log("user error", e);
    }
};

module.exports = createApartment;