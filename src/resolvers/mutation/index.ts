import GMR from "graphql-merge-resolvers";
import resolversAuthMutation from "./auth/signup.mutation";
import resolversExampleMutation from "./example/example.mutation";

const mutationResolvers = GMR.merge([
    resolversExampleMutation,
    resolversAuthMutation,
]);

export default mutationResolvers;