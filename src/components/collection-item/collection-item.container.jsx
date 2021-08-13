import React from 'react';
import { flowRight } from 'lodash';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';

import CollectionItem from './collection-item.component';

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const CollectionItemContainer = (props) => {
  const { addItemToCart } = props;
  return (
    <CollectionItem
      {...props}
      addItem={(item) => addItemToCart({ variables: { item } })}
    />
  );
};

export default flowRight(graphql(ADD_ITEM_TO_CART, { name: 'addItemToCart' }))(
  CollectionItemContainer
);
