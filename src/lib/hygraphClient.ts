import { GraphQLClient } from 'graphql-request';

const hygraphClient = new GraphQLClient(process.env.HYGRAPH_API_URL as string);

export default hygraphClient;
