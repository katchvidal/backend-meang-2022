import GMR from "graphql-merge-resolvers";
import resolversExampleMutation from "./example/example.mutation";

const mutationResolvers = GMR.merge([
    resolversExampleMutation
]);

export default mutationResolvers;