import React from 'react';
import { flowRight } from 'lodash';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';

import CollectionPage from './collection.component';
import Spinner from '../../components/spinner/spinner.component';

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
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

const CollectionPageContainer = ({
  data: { loading, getCollectionsByTitle },
}) => {
  if (loading) {
    return <Spinner />;
  }
  return <CollectionPage collection={getCollectionsByTitle} />;
};

export default flowRight(
  graphql(GET_COLLECTION_BY_TITLE, {
    options: ({ match }) => ({
      variables: {
        title: match.params.collectionId,
      },
    }),
  })
)(CollectionPageContainer);
