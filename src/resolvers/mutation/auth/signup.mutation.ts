import { IResolvers } from "@graphql-tools/utils";
import chalk from "chalk";
import { COLLECTIONS } from "../../../configs/constants";
import { findOneElement, inserOneElement } from "../../../lib/operation.mongo";
import bcrypt from 'bcrypt'

const resolversAuthMutation: IResolvers = {
    Mutation: {
        async signup( root, args, context ) {
            console.log(chalk.cyanBright(`Backend Server: SignUp Mutation`));
            const { user } = args
            const alreadyExist = await findOneElement( context.db, COLLECTIONS.USERS, { email: user.email })
            if ( alreadyExist ){
                return {
                    status: true,
                    message: `Backend Response: ${ user.email } is already taken Please Try Again`,
                    user: null,
                }
            }
            user.createAT = new Date().toISOString();
            user.password = bcrypt.hashSync(String(user?.password), 11);
            return await inserOneElement( context.db, COLLECTIONS.USERS, user )
            .then( res => {
                if ( !res ){
                    return {
                        status: false,
                        message: `Backend Response: Something Went Wrong Cannot Register a User`
                    }
                }

                return {
                    status: true,
                    message: `Backend Response: User Register Succesfull!`
                }
            })
            .catch( err => {
                return {
                    status: false,
                    message: `Backend Response: Something Went Wrong Please Contact an Admin`
                }
            })
        }
    },
};

export default resolversAuthMutation;