import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from

 'apollo-link-http';
 import gql from 'graphql-tag';
 import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import ReactDOM from 'react-dom'; 
import Pages from './pages';
import injectStyles from './styles';



const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://immense-reaches-97039.herokuapp.com/'
}

);



const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link,
  
});

client
  .query({
    query: gql`
      query GetLaunchById { launch(id: 40) { id rocket { id type } } }
    `
  })
  .then(result => console.log(result));
  
  injectStyles();
ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>, 
  document.getElementById('root')
);