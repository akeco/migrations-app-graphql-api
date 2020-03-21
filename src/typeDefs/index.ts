export {};

const typeDefs: string = `
    scalar Date
    
    type ErrorType {
        message: String!
    }

    type ServiceCategories {
        id: ID!
        name: String!
    }
    
    type Services {
        id: ID!
        categoryId: Int!
        type: String!
        owners: [Users]
    }
    
    type Continents {
        id: ID!
        name: String!
    }
    
    type Countries {
        id: ID!
        name: String!
        continentId: Int!
    }
    
    type Cities {
        id: ID!
        name: String
        countryCode: String
    }
    
    type Users {
        id: ID!
        firstName: String!
        lastName: String!
        apartments: [Apartments]
        events: [Events]
    }
    
    type Events {
        id: ID!
        title: String!
    }
    
    type RestaurantCategories {
        id: ID!
        name: String!
    }
    
    type Restaurant {
        id: ID!
        name: String!
    }
    
    type Apartments {
        id: ID!
        title: String!
    }
    
    type ApartmentComment {
        id: ID!
        apartmentId: Int!
        ownerId: Int!
        text: String!
        createdAt: Date!
    }
    
    type EventComment {
        id: ID!
        eventId: Int!
        ownerId: Int!
        text: String!
        createdAt: Date!
    }
    
    type LoginType {
        token: String
        error: ErrorType
    }
    
    input UserInput {
        email: String!
        password: String!
        firstName: String!
        lastName: String!
        countryCode: String!
        originCountryCode: String!
        cityId: Int!
        originCityId: Int!
        lat: Float!
        lng: Float!
    }
    
    input LoginInput {
        email: String!
        password: String!
    }
    
    input ApartmentCommentInput {
        apartment_id: Int!
        owner_id: Int!
        text: String!
    }
    
    input EventCommentInput {
        event_id: Int!
        owner_id: Int!
        text: String!
    }
    
    input ApartmentInput {
        title: String!
        description: String!
        image: String
        coordinates: [Float]
        phoneNumber: String
        renting: Boolean!
        ownerId: Int!
        countryCode: String!
        cityId: Int!
    }
    
    input EventInput {
        title: String!
        description: String!
        image: String
        address: String
        eventDateTime: Date!
        coordinates: [Float]
        likes: Int
        dislikes: Int
        promoting: Boolean!
        phoneNumber: String
        ownerId: Int!
        countryCode: String!
        originCountryCode: String!
        cityId: Int!
    }
    
    input EventLikeInput {
        eventId: Int!
        ownerId: Int!
    }
    
    input GeolocationInput {
        lat: Float!
        lng: Float!
        radius: Float!
    }
    
    type Mutation {
        createUser(input: UserInput!): Users,
        login(input: LoginInput!): LoginType,
        
        createApartment(input: ApartmentInput!): Apartments,
        createApartmentComment(input: ApartmentCommentInput!): ApartmentComment,
        
        createEvent(input: EventInput!): Events,
        createEventComments(input: EventCommentInput!): EventComment,
        setEventLikeDislike(input: EventLikeInput!): Boolean
    }
  
    type Query {
        serviceCategories: [ServiceCategories],
        continents: [Continents],
        countries: [Countries],
        cities: [Cities],
        
        usersById(userID: Int!): [Users],
        usersFromOriginCountry(originCountryCode: String!): [Users],
        usersFromCountry(countryCode: String!): [Users],
        usersFromCity(cityID: String!): [Users],
        usersFromOriginCountryAndCurrentCountry(originCountryCode: String!, currentCountryCode: String!): [Users],
        usersByGeolocation(input: GeolocationInput!): [Users],
        
        servicesByCategory(categoryID: Int!): [Services],
        servicesByOwner(ownerID: Int!): [Services],
        servicesByOwnersCity(cityID: Int!): [Services],
        servicesByOwnersCountry(countryCode: String!): [Services],
        servicesByOwnersOriginCountry(countryCode: String!): [Services],
        servicesByGeolocation(input: GeolocationInput!): [Events],
        
        eventsByCountry(countryCode: String!): [Events],
        eventsByCity(cityID: Int!): [Events],
        eventsByOwner(ownerID: Int!): [Events],
        eventsByCategory(categoryID: Int!): [Events],
        eventsByDate(date: String!): [Events],
        eventsByGeolocation(input: GeolocationInput!): [Events],
        
        restaurantCategories: [RestaurantCategories],
        restaurantsByCategory(categoryID: Int!): [Restaurant],
        restaurantsByOwner(ownerID: Int!): [Restaurant],
        restaurantsByCity(cityID: Int!): [Restaurant],
        restaurantsByOriginCountry(countryCode: String!): [Restaurant],
        restaurantsByCountry(countryCode: String!): [Restaurant],
        restaurantsByCityAndCategory(cityID: Int!, categoryID: Int!): [Restaurant]
        restaurantsByGeolocation(input: GeolocationInput!): [Restaurant],
        
        apartmentsByCity(cityID: Int!): [Apartments],
        apartmentsByGeolocation(input: GeolocationInput!): [Apartments],
        apartmentsByOwner(ownerID: Int!): [Apartments],
        apartmentsByRent(renting: Boolean!): [Apartments],
    }
`;

module.exports = typeDefs;