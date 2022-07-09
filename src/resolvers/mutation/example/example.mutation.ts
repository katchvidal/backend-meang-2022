import { IResolvers } from "@graphql-tools/utils";


const resolversExampleMutation: IResolvers = {
  Mutation: {
    example(){
        console.log('Backend Response: Example Mutation')
        
    }
  },
};

export default resolversExampleMutation;