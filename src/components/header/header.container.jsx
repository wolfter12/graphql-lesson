import React from 'react';
import { flowRight } from 'lodash';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';

import Header from './header.component';

const GET_CLIENT_PROPERTIES = gql`
  {
    cartHidden @client
    currentUser @client
  }
`;

const HeaderContainer = ({ data: { cartHidden, currentUser } }) => (
  <Header hidden={cartHidden} currentUser={currentUser} />
);

export default flowRight(graphql(GET_CLIENT_PROPERTIES))(HeaderContainer);
