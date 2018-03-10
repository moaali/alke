import React, { Component } from 'react';
import { Col, Row } from 'antd';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import Card from 'components/UI/Card';
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

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

export default class CardScreen extends Component {
  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Card</title>
        </Helmet>
        <PageTitle>Card</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Basic Card'
              subtitle='A basic card containing a title, content and an extra corner content.'
            >
              <ContentWrapper>
                <Card title='Card title' extra={<a>More</a>}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='No border'
              subtitle='A borderless card on a gray background.'
            >
              <ContentWrapper>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                  <Card title='Card title' bordered={false}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Card>
                </div>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Simple card'
              subtitle='A simple card only containing a content area.'
            >
              <ContentWrapper>
                <Card>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Customized content'
              subtitle='Customizing default width and margin.'
            >
              <ContentWrapper>
                <Card bodyStyle={{ padding: 0 }}>
                  <div className='custom-image'>
                    <img alt='example' width='100%' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />
                  </div>
                  <div className='custom-card'>
                    <h3>Europe Street beat</h3>
                    <p>www.instagram.com</p>
                  </div>
                </Card>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Card in column'
              subtitle='Cards usually cooperate with grid column layout in overview page.'
            >
              <ContentWrapper>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Card title='Card title' bordered={false}>Card content</Card>
                    </Col>
                    <Col span={8}>
                      <Card title='Card title' bordered={false}>Card content</Card>
                    </Col>
                    <Col span={8}>
                      <Card title='Card title' bordered={false}>Card content</Card>
                    </Col>
                  </Row>
                </div>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Loading card'
              subtitle='Shows a loading indicator while the contents of the card is being fetched.'
            >
              <ContentWrapper>
                <Card loading title='Card title' style={{ width: '100%' }}>
                  Whatever content
                </Card>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Grid card'
              subtitle='Grid style card content.'
            >
              <ContentWrapper>
                <Card title='Card Title' noHovering>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                </Card>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
