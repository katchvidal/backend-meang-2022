import { COLLECTIONS, EXPIRETIME, MESSAGES } from '../../../configs/constants'
import { IResolvers } from "@graphql-tools/utils";
import { findOneElement, findElement } from '../../../lib/operation.mongo'
import { ObjectId } from 'mongodb'
import chalk from "chalk";
import bcrypt from 'bcrypt'
import GenerateToken from '../../../lib/token.utils';

async function ExistInDatabasebyEmail(database: any, collection: any, filter: object) {
    return await findOneElement(database, collection, filter)
}

const resolversAuthQuery: IResolvers = {
    Query: {
        async signin(root, args, context) {
            console.log(chalk.cyanBright(`Backend Server: Sign In Query`));
            try {
                const { password, email } = args
                // console.log( password, email );
                const user = await findOneElement(context.db, COLLECTIONS.USERS, { email })
                // console.log( user );
                if (!user) {
                    return {
                        status: false,
                        message: "Backend Response: User Not Exist Please Try Again",
                        token: null,
                    };
                }
                const password_check = bcrypt.compareSync(
                    String(password),
                    user!.password
                );
                // console.log( password_check );
                if (password_check !== null) {
                    delete user.password;
                    delete user.birthday;
                    delete user.createAT;
                }

                const token = new GenerateToken().sign({ user }, EXPIRETIME.H24)
                return {
                    status: true,
                    message: (user === null) ? `Backend Response: User & Password not Exist Please Try Again`
                        : `Backend Response: User Sign In Successfull`,
                    token
                }
            } catch (error) {
                return {
                    status: false,
                    message: "Backend Response: Cannot Sign In Please Contact to Admin",
                    token: null,
                };
            }
        },

        async auth(root, args, context) {
            console.log(chalk.cyanBright(`Backend Server: Authentication (Me) Token Query`));
            const info = new GenerateToken().verify(context.token);
            if (info === MESSAGES.TOKEN_VERIFICATION_FAILED) {
                return {
                    status: false,
                    message: MESSAGES.TOKEN_VERIFICATION_FAILED,
                    user: null,
                }
            }

            return {
                status: true,
                message: `Backend Response: User is Authenticated`,
                user: Object.values(info)[0]
            }
        },
    }
};




export default resolversAuthQuery;