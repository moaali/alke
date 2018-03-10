import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { Col } from 'antd';
import Popover from 'components/UI/Popover';
import Button from 'components/UI/Button';
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

const buttonWidth = 70;

const text = <span>Title</span>;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);


export default class PopoverScreen extends Component {
  state = {
    visible: false,
  }

  hide = () => {
    this.setState({
      visible: false,
    });
  }

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }

  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Popover</title>
        </Helmet>
        <PageTitle>Popover</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Basic'
              subtitle='The most basic example. The size of the floating layer depends on the contents region.'
            >
              <ContentWrapper>
                <Popover content={content} title='Title'>
                  <Button type='primary'>Hover me</Button>
                </Popover>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Three ways to trigger'
              subtitle='Mouse to click, focus and move in.'
            >
              <ContentWrapper>
                <Popover content={content} title='Title' trigger='hover'>
                  <Button>Hover me</Button>
                </Popover>
                <Popover content={content} title='Title' trigger='focus'>
                  <Button>Focus me</Button>
                </Popover>
                <Popover content={content} title='Title' trigger='click'>
                  <Button>Click me</Button>
                </Popover>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Placement'
              subtitle='There are 12 placement options available.'
            >
              <ContentWrapper>
                <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                  <Popover placement='topLeft' title={text} content={content} trigger='click'>
                    <Button>TL</Button>
                  </Popover>
                  <Popover placement='top' title={text} content={content} trigger='click'>
                    <Button>Top</Button>
                  </Popover>
                  <Popover placement='topRight' title={text} content={content} trigger='click'>
                    <Button>TR</Button>
                  </Popover>
                </div>
                <div style={{ width: buttonWidth, float: 'left' }}>
                  <Popover placement='leftTop' title={text} content={content} trigger='click'>
                    <Button>LT</Button>
                  </Popover>
                  <Popover placement='left' title={text} content={content} trigger='click'>
                    <Button>Left</Button>
                  </Popover>
                  <Popover placement='leftBottom' title={text} content={content} trigger='click'>
                    <Button>LB</Button>
                  </Popover>
                </div>
                <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
                  <Popover placement='rightTop' title={text} content={content} trigger='click'>
                    <Button>RT</Button>
                  </Popover>
                  <Popover placement='right' title={text} content={content} trigger='click'>
                    <Button>Right</Button>
                  </Popover>
                  <Popover placement='rightBottom' title={text} content={content} trigger='click'>
                    <Button>RB</Button>
                  </Popover>
                </div>
                <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
                  <Popover placement='bottomLeft' title={text} content={content} trigger='click'>
                    <Button>BL</Button>
                  </Popover>
                  <Popover placement='bottom' title={text} content={content} trigger='click'>
                    <Button>Bottom</Button>
                  </Popover>
                  <Popover placement='bottomRight' title={text} content={content} trigger='click'>
                    <Button>BR</Button>
                  </Popover>
                </div>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Controlling the close of the dialog'
              subtitle='Use visible prop to control the display of the card.'
            >
              <ContentWrapper>
                <Popover
                  content={<a onClick={this.hide}>Close</a>}
                  title='Title'
                  trigger='click'
                  visible={this.state.visible}
                  onVisibleChange={this.handleVisibleChange}
                >
                  <Button type='primary'>Click me</Button>
                </Popover>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
