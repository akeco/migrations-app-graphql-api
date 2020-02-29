import {bool} from "aws-sdk/clients/signer";

export {}
const { promisify } = require('util');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const genSalt = promisify(bcrypt.genSalt);
const hash = promisify(bcrypt.hash);
const compare = promisify(bcrypt.compare);

type Token = {
    id: number,
    user: 'test'
}

class Authentication {
    public encryptPassword = async (password: string) : Promise<string | Error> => {
        try {
            const salt = await genSalt(saltRounds);
            const result = await hash(password, salt);

            return result;
        }
        catch (e) {
            return e;
        }
    };

    public comparePasswords = async (plainPassword: string, hashPassword: string): Promise<boolean | Error> => {
        try {
            return await compare(plainPassword, hashPassword);
        }
        catch (e) {
            return e;
        }
    };

    public decodeToken = async (token: string) : Promise<string | Error> => {
        try {
            return await jwt.verify(token, 'secret');
        }
        catch (e) {
            console.log("EEE", e);
            return e;
        }
    };

    public generateToken = (data : Token) : string => {
        return jwt.sign(data, 'secret', { algorithm: 'HS256' });
    };
}

module.exports = Authentication;