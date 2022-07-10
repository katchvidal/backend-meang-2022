import GMR from "graphql-merge-resolvers";
import resolversAuthQuery from "./auth/auth.query";
import resolverExampleQuery from "./example/example.query";
import resolverUsersQuery from "./users/users.query";



const queryResolvers = GMR.merge([
    resolverExampleQuery,
    resolverUsersQuery,
    resolversAuthQuery,
]);

export default queryResolvers;