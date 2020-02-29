export {};
const knex = require('../../../../config/db.js');
const Authorization = require('../../../utils/Authentication');

type Params = {
    input: {
        email: string,
        password: string,
        firstName: string,
        lastName: string,
        countryCode: string,
        originCountryCode: string,
        cityId: number,
        originCityId: number,
        lat: number,
        lng: number,
    }
}

const createUser = async (_: any, { input: {
    email,
    password,
    firstName,
    lastName,
    countryCode,
    originCountryCode,
    cityId,
    originCityId,
    lat,
    lng
} }: Params) => {
    try {
        const Auth = new Authorization();
        const hashPassword: string | Error = await Auth.encryptPassword(password);
        const user = await knex('users').insert({
            email,
            password: hashPassword,
            first_name: firstName,
            last_name: lastName,
            country_code: countryCode,
            origin_country_code: originCountryCode,
            city_id: cityId,
            origin_city_id: originCityId,
            coordinates: knex.postgis.setSRID(knex.postgis.makePoint(lng, lat), 4326),
        }).returning(['id', 'firstName', 'lastName']);
        return user[0];
    }
    catch (e) {
        console.log("user error", e);
    }
};

module.exports = createUser;