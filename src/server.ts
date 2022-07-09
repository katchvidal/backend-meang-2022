import { ApolloServer } from "apollo-server-express";
import express from "express";
import compression from "compression";
import cors from "cors";
import enviroments from "./configs/enviroments";
import schema from './schemas'
import chalk from "chalk";

//  TODO: CHECK ENVIROMENT 
if (process.env.NODE_ENV !== "production") {
  const env = enviroments;  
}

//  TODO: Main function start config of the server
async function main() {
  const PORT = process.env.PORT;
  const app = express();
  app.use(cors());
  app.use(compression());

  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen({ port: PORT }, () =>
    console.log( "Backend Server URL:", chalk.greenBright(`🚀 Server ready and listening at http://localhost:${PORT}/graphql`))
  );
}

//  TODO: AUTO CALL SERVER
main();
