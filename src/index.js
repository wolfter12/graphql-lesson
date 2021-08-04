import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';

// import { store, persistor } from './redux/store';

import { default as App } from './App.container';

import { resolvers, typeDefs } from './graphql/resolvers';
import INITIAL_DATA from './graphql/initial-data';

import './index.css';

const link = createHttpLink({
  uri: 'https://crwn-clothing.com',
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
  typeDefs,
  resolvers,
});

client.writeData({
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
