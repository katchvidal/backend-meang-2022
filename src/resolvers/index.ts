import { IResolvers } from '@graphql-tools/utils';
import query from './query'; // -> Es li mismo que si la direccion a la que apuntara fuera ./query/index.ts
import mutation from './mutation'; // -> Es li mismo que si la direccion a la que apuntara fuera ./mutation/index.ts

const resolvers: IResolvers = {
    ...query,
    ...mutation
};


export default resolvers;