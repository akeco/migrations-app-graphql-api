export {};
const Authentication = require('../services/Authentication');
const Auth = new Authentication();

const authentication = async (resolve: Function, root: {}, args: {}, context: { request: { get: Function } }, info: {}) : Promise<string | Error> => {
    let token: string;
    try {
        token = Auth.decodeToken(context.request.get("Authorization"));
    } catch (e) {
        return new Error("Not authorised");
    }
    const result : any = await resolve(root, args, context, info);
    return result;
};

module.exports = authentication;