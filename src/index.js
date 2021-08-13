import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

// import { store, persistor } from './redux/store';

import { default as App } from './App.container';

import { resolvers, typeDefs } from './graphql/resolvers';
import INITIAL_DATA from './graphql/initial-data';

import './index.css';

// const link = createHttpLink({
//   uri: 'https://crwn-clothing.com',
// });

const uri = 'https://crwn-clothing.com';

const cache = new InMemoryCache();

cache.modify(INITIAL_DATA);

const client = new ApolloClient({
  uri,
  cache,
  typeDefs,
  resolvers,
});

client.writeQuery({
  query: gql`
    query WriteInitialData {
      cartHidden
      cartItems
      itemCount
      cartTotal
      currentUser
    }
  `,
  data: INITIAL_DATA,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      {/* <PersistGate persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </BrowserRouter>
    {/* </Provider> */}
  </ApolloProvider>,
  document.getElementById('root')
);
