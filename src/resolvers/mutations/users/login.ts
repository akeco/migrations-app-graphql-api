export {};
const knex = require('../../../../config/db.js');
const Authentication = require('../../../services/Authentication');

type Params = {
    input: {
        email: string,
        password: string,
    }
}

const login = async (_: any, { input: {
    email,
    password
} }: Params) => {
    try {
        const Auth = new Authentication();
        const user = await knex('users')
            .where({ email })
            .first();

        if (user) {
            const result: boolean | Error = await Auth.comparePasswords(password, user.password);
            console.log("RES", result)
            if (result) {
                const token = Auth.generateToken(user);
                return ({
                    token
                });
            }
            else return ({
                error: {
                    message: 'Invalid email or password'
                }
            })
        }
        else return ({
            error: {
                message: 'Invalid email or password'
            }
        })
    }
    catch (e) {
        console.log("user error", e);
    }
};

module.exports = login;