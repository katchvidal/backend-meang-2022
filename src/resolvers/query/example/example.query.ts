import { IResolvers } from "@graphql-tools/utils";


const resolverExampleQuery: IResolvers = {
  Query: {
    example(){
        console.log('Backend Response: Example Query')
        
    }
  },
};

export default resolverExampleQuery;