import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import { MONGOCLIENTURI } from "../configs/constants";
import chalk from "chalk";
// TODO: Class Method to connect With MongoDB

export async function connectToDatabase () {
    dotenv.config();
 
    const client: MongoClient = new MongoClient(MONGOCLIENTURI);
            
    await client.connect();
        
    const db = client.db();
    if (client) {
      console.log(
        ` ${chalk.cyanBright("==================DATABASE===================")}`
      );
      console.log(`STATUS: ${chalk.greenBright("ONLINE")}`);
      console.log(`DATABASE NAME: ${chalk.greenBright(db.databaseName)}`);
      console.log(
        ` ${chalk.cyanBright("==================DATABASE===================")}`
      );
    }
    return db;
 }