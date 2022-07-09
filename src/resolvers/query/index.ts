import GMR from "graphql-merge-resolvers";
import resolverExampleQuery from "./example/example.query";



const queryResolvers = GMR.merge([
    resolverExampleQuery
]);

export default queryResolvers;