import { GraphQLClient } from 'graphql-request';

export const hygraphClient = new GraphQLClient(process.env.HYGRAPH_API_URL as string);
