import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { autobind } from 'core-decorators';
import { Col } from 'antd';
import Collapse, { Panel } from 'components/UI/Collapse';
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

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

export default class CollapseScreen extends Component {
  @autobind
  handleCollapse() {
    /**
     * Wait untill sidebar fully toggled (animated in/out)
     * then trigger window resize event in order to recalculate
     * masonry layout widths and gutters.
     */
    setTimeout(() => {
      window.dispatchEvent(window.EVENT);
    }, 300);
  }

  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Collapse</title>
        </Helmet>
        <PageTitle>Collapse</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Collapse'
              subtitle='More than one panel can be expanded at a time, the first panel is initialized to be active in this case.'
            >
              <ContentWrapper>
                <Collapse onChange={this.handleCollapse} defaultActiveKey={['1']}>
                  <Panel header='This is panel header 1' key='1'>
                    <p>{text}</p>
                  </Panel>
                  <Panel header='This is panel header 2' key='2'>
                    <p>{text}</p>
                  </Panel>
                  <Panel header='This is panel header 3' key='3' disabled>
                    <p>{text}</p>
                  </Panel>
                </Collapse>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Accordion'
              subtitle='Accordion mode, only one panel can be expanded at a time. The first panel will be expanded by default.'
            >
              <ContentWrapper>
                <Collapse onChange={this.handleCollapse} accordion>
                  <Panel header={'This is panel header 1'} key='1'>
                    <p>{text}</p>
                  </Panel>
                  <Panel header={'This is panel header 2'} key='2'>
                    <p>{text}</p>
                  </Panel>
                  <Panel header={'This is panel header 3'} key='3'>
                    <p>{text}</p>
                  </Panel>
                </Collapse>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Nested panel'
              subtitle='Collapse is nested inside the Collapse.'
            >
              <ContentWrapper>
                <Collapse onChange={this.handleCollapse}>
                  <Panel header={'This is panel header 1'} key='1'>
                    <Collapse onChange={this.handleCollapse} defaultActiveKey='1'>
                      <Panel header={'This is panel nest panel'} key='1'>
                        <p>{text}</p>
                      </Panel>
                    </Collapse>
                  </Panel>
                  <Panel header={'This is panel header 2'} key='2'>
                    <p>{text}</p>
                  </Panel>
                  <Panel header={'This is panel header 3'} key='3'>
                    <p>{text}</p>
                  </Panel>
                </Collapse>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Borderless'
              subtitle='A borderless style of Collapse.'
            >
              <ContentWrapper>
                <Collapse onChange={this.handleCollapse} bordered={false} defaultActiveKey={['1']}>
                  <Panel header='This is panel header 1' key='1'>
                    <p>{text}</p>
                  </Panel>
                  <Panel header='This is panel header 2' key='2'>
                    <p>{text}</p>
                  </Panel>
                  <Panel header='This is panel header 3' key='3'>
                    <p>{text}</p>
                  </Panel>
                </Collapse>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Custom Panel'
              subtitle='Customize the background, border and margin styles for each panel.'
            >
              <ContentWrapper>
                <Collapse onChange={this.handleCollapse} bordered={false} defaultActiveKey={['1']}>
                  <Panel header='This is panel header 1' key='1' style={customPanelStyle}>
                    <p>{text}</p>
                  </Panel>
                  <Panel header='This is panel header 2' key='2' style={customPanelStyle}>
                    <p>{text}</p>
                  </Panel>
                  <Panel header='This is panel header 3' key='3' style={customPanelStyle}>
                    <p>{text}</p>
                  </Panel>
                </Collapse>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
