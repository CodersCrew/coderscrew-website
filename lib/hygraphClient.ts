import { GraphQLClient } from 'graphql-request';

export default new GraphQLClient(process.env.HYGRAPH_API_URL as string);
