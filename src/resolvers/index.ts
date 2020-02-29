export {};
const serviceCategories = require('./queries/services/serviceCategories');
const continents = require('./queries/continents');
const countries = require('./queries/countries');
const cities = require('./queries/cities');

const usersFromOriginCountry = require('./queries/users/usersFromOriginCountry');
const usersFromCountry = require('./queries/users/usersFromCountry');
const usersFromCity = require('./queries/users/usersFromCity');
const usersFromOriginCountryAndCurrentCountry = require('./queries/users/usersFromOriginCountryAndCurrentCountry');
const usersById = require('./queries/users/usersById');
const usersByGeolocation = require('./queries/users/usersByGeolocation');
const createUser = require('./mutations/users/createUser');
const login = require('./mutations/users/login');

const servicesByCategory = require('./queries/services/servicesByCategory');
const servicesByOwner = require('./queries/services/servicesByOwner');
const servicesByOwnersCity = require('./queries/services/servicesByOwnersCity');
const servicesByOwnersCountry = require('./queries/services/servicesByOwnersCountry');
const servicesByOwnersOriginCountry = require('./queries/services/servicesByOwnersOriginCountry');
const servicesByGeolocation = require('./queries/services/servicesByGeolocation');

const eventsByCountry = require('./queries/events/eventsByCountry');
const eventsByCity = require('./queries/events/eventsByCity');
const eventsByOwner = require('./queries/events/eventsByOwner');
const eventsByCategory = require('./queries/events/eventsByCategory');
const eventsByDate = require('./queries/events/eventsByDate');
const eventsByGeolocation = require('./queries/events/eventsByGeolocation');
const createEventComments = require('./mutations/events/createEventComments');
const createEvent = require('./mutations/events/createEvent');
const setEventLikeDislike = require('./mutations/events/setEventLikeDislike');

const restaurantCategories = require('./queries/restaurants/restaurantCategories');
const restaurantsByCategory = require('./queries/restaurants/restaurantsByCategory');
const restaurantsByOwner = require('./queries/restaurants/restaurantsByOwner');
const restaurantsByCity = require('./queries/restaurants/restaurantsByCity');
const restaurantsByOriginCountry = require('./queries/restaurants/restaurantsByOriginCountry');
const restaurantsByCountry = require('./queries/restaurants/restaurantsByCountry');
const restaurantsByCityAndCategory = require('./queries/restaurants/restaurantsByCityAndCategory');
const restaurantsByGeolocation = require('./queries/restaurants/restaurantsByGeolocation');

const apartmentsByCity = require('./queries/apartments/apartmentsByCity');
const apartmentsByGeolocation = require('./queries/apartments/apartmentsByGeolocation');
const apartmentsByOwner = require('./queries/apartments/apartmentsByOwner');
const apartmentsByRent = require('./queries/apartments/apartmentsByRent');
const createApartmentComment = require('./mutations/apartments/createApartmentComment');
const createApartment = require('./mutations/apartments/createApartment');

const resolvers: Object = {
    Mutation: {
        createUser,
        login,

        createApartment,
        createApartmentComment,

        createEvent,
        createEventComments,
        setEventLikeDislike
    },
    Query: {
        serviceCategories,
        continents,
        countries,
        cities,

        usersFromOriginCountry,
        usersFromCountry,
        usersFromCity,
        usersFromOriginCountryAndCurrentCountry,
        usersById,
        usersByGeolocation,

        servicesByCategory,
        servicesByOwner,
        servicesByOwnersCity,
        servicesByOwnersCountry,
        servicesByOwnersOriginCountry,
        servicesByGeolocation,

        eventsByCountry,
        eventsByCity,
        eventsByOwner,
        eventsByCategory,
        eventsByDate,
        eventsByGeolocation,

        restaurantCategories,
        restaurantsByCategory,
        restaurantsByOwner,
        restaurantsByCity,
        restaurantsByOriginCountry,
        restaurantsByCountry,
        restaurantsByCityAndCategory,
        restaurantsByGeolocation,

        apartmentsByCity,
        apartmentsByGeolocation,
        apartmentsByOwner,
        apartmentsByRent
    },
};

module.exports = resolvers;