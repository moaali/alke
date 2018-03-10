import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import {
  PageTitle,
  Well,
  LayoutContainer,
  SimpleMap,
  ContentWrapper,

} from 'components';

export default class GooogleMapScreen extends Component {
  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Google Map</title>
        </Helmet>
        <PageTitle>Google Map</PageTitle>
        <Well
          title='Simple Google Map Example'
          subtitle=''
        >
          <ContentWrapper>
            <SimpleMap
              latitude={52.3702}
              longitude={4.8952}
            />
          </ContentWrapper>
        </Well>
      </LayoutContainer>
    );
  }
}
