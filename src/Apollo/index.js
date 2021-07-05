import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api.everbase.co/graphql?apikey=0a281784-31f5-4e8c-9d56-af041d231b4a',
  cache: new InMemoryCache(),
});
