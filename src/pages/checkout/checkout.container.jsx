import React from 'react';
import { graphql } from '@apollo/client/react/hoc';
import gql from 'graphql-tag';
import { flowRight } from 'lodash';

import CheckoutPage from './checkout.component';

const GET_CART_ITEMS_AND_TOTAL = gql`
  {
    cartItems @client
    total @client
  }
`;

const CheckoutPageContainer = ({ data: { cartItems, total } }) => (
  <CheckoutPage cartItems={cartItems} total={total} />
);

export default flowRight(graphql(GET_CART_ITEMS_AND_TOTAL))(
  CheckoutPageContainer
);
