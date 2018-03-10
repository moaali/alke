import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { Col } from 'antd';
import Button from 'components/UI/Button';
import Tooltip from 'components/UI/Tooltip';
import PageTitle from 'components/Templates/PageTitle';
import Well from 'components/Templates/Well';
import LayoutContainer from 'components/Templates/LayoutContainer';
import ContentWrapper from 'components/Templates/ContentWrapper';
import './index.less';

const masonryOptions = {
  columnWidth: '.MasonrySizer',
  itemSelector: '.MasonryItem',
  percentPosition: true,
};

const text = <span>prompt text</span>;

export default class TooltipScreen extends Component {
  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Tooltip</title>
        </Helmet>
        <PageTitle>Tooltip</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Basic'
              subtitle='The simplest usage.'
            >
              <ContentWrapper>
                <Tooltip title='prompt text'>
                  <span>Tooltip will show when mouse enter.</span>
                </Tooltip>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Placement'
              subtitle='The ToolTip has 12 placements choice.'
            >
              <ContentWrapper>
                <div style={{ marginLeft: 60 }}>
                  <Tooltip placement='topLeft' title={text}>
                    <Button>TL</Button>
                  </Tooltip>
                  <Tooltip placement='top' title={text}>
                    <Button>Top</Button>
                  </Tooltip>
                  <Tooltip placement='topRight' title={text}>
                    <Button>TR</Button>
                  </Tooltip>
                </div>
                <div style={{ width: 60, float: 'left' }}>
                  <Tooltip placement='leftTop' title={text}>
                    <Button>LT</Button>
                  </Tooltip>
                  <Tooltip placement='left' title={text}>
                    <Button>Left</Button>
                  </Tooltip>
                  <Tooltip placement='leftBottom' title={text}>
                    <Button>LB</Button>
                  </Tooltip>
                </div>
                <div style={{ width: 60, marginLeft: 270 }}>
                  <Tooltip placement='rightTop' title={text}>
                    <Button>RT</Button>
                  </Tooltip>
                  <Tooltip placement='right' title={text}>
                    <Button>Right</Button>
                  </Tooltip>
                  <Tooltip placement='rightBottom' title={text}>
                    <Button>RB</Button>
                  </Tooltip>
                </div>
                <div style={{ marginLeft: 60, clear: 'both' }}>
                  <Tooltip placement='bottomLeft' title={text}>
                    <Button>BL</Button>
                  </Tooltip>
                  <Tooltip placement='bottom' title={text}>
                    <Button>Bottom</Button>
                  </Tooltip>
                  <Tooltip placement='bottomRight' title={text}>
                    <Button>BR</Button>
                  </Tooltip>
                </div>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
