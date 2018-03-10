import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { Col, Icon } from 'antd';
import Dropdown from 'components/UI/Dropdown';
import Button, { ButtonGroup } from 'components/UI/Button';
import PageTitle from 'components/Templates/PageTitle';
import Well from 'components/Templates/Well';
import LayoutContainer from 'components/Templates/LayoutContainer';
import ContentWrapper from 'components/Templates/ContentWrapper';

const masonryOptions = {
  columnWidth: '.MasonrySizer',
  itemSelector: '.MasonryItem',
  percentPosition: true,
};

export default class Name extends Component {
  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Blank</title>
        </Helmet>
        <PageTitle>Blank</PageTitle>
      </LayoutContainer>
    );
  }
}
