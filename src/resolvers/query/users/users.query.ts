import { COLLECTIONS } from '../../../configs/constants'
import { IResolvers } from "@graphql-tools/utils";
import { findOneElement, findElement  } from '../../../lib/operation.mongo'
import { ObjectId } from 'mongodb'
import chalk from "chalk";

const resolverUsersQuery: IResolvers = {
  Query: {
    async user(root, args, context){
          console.log(chalk.cyanBright(`Backend Server: User Query`));
        const { _id } = args
        if ( !_id.match(/^[0-9a-fA-F]{24}$/) ){
            return {
                status : false,
                message: `Backend Response: ID Not Valid Please Check & Try Again`,
                user: null
            }
        }
        const MongoID = new ObjectId( _id )
        return await findOneElement( context.db, COLLECTIONS.USERS, { _id : MongoID })
        .then( res => {
            if (!res ){
                return {
                    status: false,
                    message: `Backend Response: Something Went Wrong Please Try Again`,
                    user: null
                }
            }
            return {
                status: true,
                message: `Backend Response: Nice, all are ok`,
                user: res
            }
        })
        .catch( err => { return {
            status: false,
            message: `Internal Server Error Please Contact With an Admin`,
            user: null
        }})
    },
    async users( root, args , context ){
        console.log( chalk.cyanBright(`Backend Server: Users Query`));
        return await findElement( context.db, COLLECTIONS.USERS, {})
        .then( res => {
            if( !res ){
                return {
                    status: false,
                    message: `Backend Response: Something Went Wrong Please Try Again`,
                    users: null,
                }
            }

            return {
                status: true,
                message: `Backend Response: Nice, all are ok`,
                users: res
            }
        })
        .catch( err => { 
            return {
                status: false,
                message: `Backend Response: Something Went Wrong Please Call an Admin`,
                users: null
            }
        })

    }
  },
};

export default resolverUsersQuery;