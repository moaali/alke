import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { Col, message } from 'antd';
import Button from 'components/UI/Button';
import Popconfirm from 'components/UI/Popconfirm';
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

function confirm() {
  message.success('Click on Yes');
}

function cancel() {
  message.error('Click on No');
}

const text = 'Are you sure delete this task?';

function confirmAlt() {
  message.info('Click on Yes.');
}

export default class PopconfirmScreen extends Component {
  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Popconfirm</title>
        </Helmet>
        <PageTitle>Popconfirm</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Basic'
              subtitle='The basic example.'
            >
              <ContentWrapper>
                <Popconfirm title='Are you sure delete this task?' onConfirm={confirm} onCancel={cancel} okText='Yes' cancelText='No'>
                  <a>Delete</a>
                </Popconfirm>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Placement'
              subtitle='There are 12 placement options available. Use arrowPointAtCenter if you want arrow point at the center of target.'
            >
              <ContentWrapper>
                <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
                  <Popconfirm placement='topLeft' title={text} onConfirm={confirmAlt} okText='Yes' cancelText='No'>
                    <Button>TL</Button>
                  </Popconfirm>
                  <Popconfirm placement='top' title={text} onConfirm={confirmAlt} okText='Yes' cancelText='No'>
                    <Button>Top</Button>
                  </Popconfirm>
                  <Popconfirm placement='topRight' title={text} onConfirm={confirmAlt} okText='Yes' cancelText='No'>
                    <Button>TR</Button>
                  </Popconfirm>
                </div>
                <div style={{ width: 70, float: 'left' }}>
                  <Popconfirm placement='leftTop' title={text} onConfirm={confirmAlt} okText='Yes' cancelText='No'>
                    <Button>LT</Button>
                  </Popconfirm>
                  <Popconfirm placement='left' title={text} onConfirm={confirmAlt} okText='Yes' cancelText='No'>
                    <Button>Left</Button>
                  </Popconfirm>
                  <Popconfirm placement='leftBottom' title={text} onConfirm={confirmAlt} okText='Yes' cancelText='No'>
                    <Button>LB</Button>
                  </Popconfirm>
                </div>
                <div style={{ width: 70, marginLeft: 304 }}>
                  <Popconfirm placement='rightTop' title={text} onConfirm={confirmAlt} okText='Yes' cancelText='No'>
                    <Button>RT</Button>
                  </Popconfirm>
                  <Popconfirm placement='right' title={text} onConfirm={confirmAlt} okText='Yes' cancelText='No'>
                    <Button>Right</Button>
                  </Popconfirm>
                  <Popconfirm placement='rightBottom' title={text} onConfirm={confirmAlt} okText='Yes' cancelText='No'>
                    <Button>RB</Button>
                  </Popconfirm>
                </div>
                <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
                  <Popconfirm placement='bottomLeft' title={text} onConfirm={confirmAlt} okText='Yes' cancelText='No'>
                    <Button>BL</Button>
                  </Popconfirm>
                  <Popconfirm placement='bottom' title={text} onConfirm={confirmAlt} okText='Yes' cancelText='No'>
                    <Button>Bottom</Button>
                  </Popconfirm>
                  <Popconfirm placement='bottomRight' title={text} onConfirm={confirmAlt} okText='Yes' cancelText='No'>
                    <Button>BR</Button>
                  </Popconfirm>
                </div>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
