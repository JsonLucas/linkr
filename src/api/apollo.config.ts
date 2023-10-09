import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';

export const apolloClient = new ApolloClient({
    uri: 'https://flyby-router-demo.herokuapp.com/',
    cache: new InMemoryCache(),
});