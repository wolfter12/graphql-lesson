import React from 'react';
import { flowRight } from 'lodash';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';

import CartDropdown from './cart-dropdown.component';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const CartDropdownContainer = ({ toggleCartHidden, data: { cartItems } }) => {
  return (
    <CartDropdown cartItems={cartItems} toggleCartHidden={toggleCartHidden} />
  );
};

export default flowRight(
  graphql(TOGGLE_CART_HIDDEN, { name: 'toggleCartHidden' }),
  graphql(GET_CART_ITEMS)
)(CartDropdownContainer);
