export {};
const knex = require('../../../../config/db.js');
const Authentication = require('../../../utils/Authentication');

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
            .where({ email });

        if (user[0]) {
            const result: boolean | Error = await Auth.comparePasswords(password, user[0].password);
            console.log("RES", result)
            if (result) {
                const token = Auth.generateToken(user[0]);
                return ({
                    message: 'Success',
                    token
                });
            }
            else return ({
                message: 'Invalid email or password'
            })
        }
        else return ({
            message: 'Invalid email or password'
        })
    }
    catch (e) {
        console.log("user error", e);
    }
};

module.exports = login;