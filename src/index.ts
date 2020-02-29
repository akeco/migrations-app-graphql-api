const { GraphQLServer } = require('graphql-yoga');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { decodeToken } = require('./middlewares/authentication');
const { logInput, logResult } = require('./middlewares/logger');

const server: {
    close: any,
    start: any,
} = new GraphQLServer({
    typeDefs,
    resolvers,
    context: (req: any) => ({ ...req }),
    middlewares: [logResult]
});

process.on('uncaughtException', () => server.close(() =>  console.log('Http server closed.')));
process.on('SIGTERM', () => server.close(() =>  console.log('Http server closed.')));

server.start({ debug: true }, () => console.log('Server is running on localhost:4000'));