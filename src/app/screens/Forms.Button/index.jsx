import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { Col, Icon } from 'antd';
import Dropdown from 'components/UI/Dropdown';
import Menu from 'components/UI/Menu';
import Button, { ButtonGroup } from 'components/UI/Button';
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

export default class ButtonScreen extends Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item key='1'>1st item</Menu.Item>
        <Menu.Item key='2'>2nd item</Menu.Item>
        <Menu.Item key='3'>3rd item</Menu.Item>
      </Menu>
    );

    return (
      <LayoutContainer>
        <Helmet>
          <title>Button</title>
        </Helmet>
        <PageTitle>Button</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Type'
              subtitle='There are primary button, default button, dashed button and danger button in antd.'
            >
              <ContentWrapper>
                <div className='peers'>
                  <div className='peer pR-15'><Button type='primary'>Primary</Button></div>
                  <div className='peer pR-15'><Button>Default</Button></div>
                  <div className='peer pR-15'><Button type='dashed'>Dashed</Button></div>
                  <div className='peer'><Button type='danger'>Danger</Button></div>
                </div>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Icon'
              subtitle='Button components can contain an Icon. This is done by setting the icon property or placing an Icon component within the Button'
            >
              <ContentWrapper>
                <div className='peers pB-15'>
                  <div className='peer pR-15'><Button type='primary' shape='circle' icon='search' /></div>
                  <div className='peer pR-15'><Button type='primary' icon='search'>Search</Button></div>
                  <div className='peer pR-15'><Button shape='circle' icon='search' /></div>
                  <div className='peer'><Button icon='search'>Search</Button></div>
                </div>
                <div className='peers'>
                  <div className='peer pR-15'><Button shape='circle' icon='search' /></div>
                  <div className='peer pR-15'><Button icon='search'>Search</Button></div>
                  <div className='peer pR-15'><Button type='dashed' shape='circle' icon='search' /></div>
                  <div className='peer'><Button type='dashed' icon='search'>Search</Button></div>
                </div>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Size'
              subtitle='Ant Design supports a default button size as well as a large and small size.'
            >
              <ContentWrapper>
                <div className='peers pB-15'>
                  <div className='peer pR-15'><Button type='primary' size={'large'}>Primary</Button></div>
                  <div className='peer pR-15'><Button size={'large'}>Normal</Button></div>
                  <div className='peer pR-15'><Button type='dashed' size={'large'}>Dashed</Button></div>
                  <div className='peer pR-15'><Button type='danger' size={'large'}>Danger</Button></div>
                  <div className='peer pR-15'><Button type='primary' shape='circle' icon='download' size={'large'} /></div>
                  <div className='peer pR-15'><Button type='primary' icon='download' size={'large'}>Download</Button></div>
                </div>
                <ButtonGroup size={'large'}>
                  <Button type='primary'>
                    <Icon type='left' />Backward
                  </Button>
                  <Button type='primary'>
                    Forward<Icon type='right' />
                  </Button>
                </ButtonGroup>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Multiple Buttons'
              subtitle='If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into Dropdown.Button.'
            >
              <ContentWrapper>
                <div className='peers'>
                  <div className='peer pR-15'>
                    <Button type='primary'>primary</Button>
                  </div>
                  <div className='peer pR-15'>
                    <Button>secondary</Button>
                  </div>
                  <div className='peer pR-15'>
                    <Dropdown overlay={menu}>
                      <Button>
                        more <Icon type='down' />
                      </Button>
                    </Dropdown>
                  </div>
                </div>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Ghost Button'
              subtitle='ghost property will make buttons background transparent, it is common used in colored background.'
            >
              <ContentWrapper>
                <div className='peers'>
                  <div className='peer pR-15'><Button type='primary' ghost>Primary</Button></div>
                  <div className='peer'><Button type='danger' ghost>danger</Button></div>
                </div>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
