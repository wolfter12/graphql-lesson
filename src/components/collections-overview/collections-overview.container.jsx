import React from 'react';
import { flowRight } from 'lodash';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';

import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsOverviewContainer = ({ data }) => {
  const { loading } = data;

  if (loading) {
    return <Spinner />;
  }
  const { collections = [] } = data;
  return <CollectionsOverview collections={collections} />;
};

export default flowRight(graphql(GET_COLLECTIONS))(
  CollectionsOverviewContainer
);
