import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { autobind } from 'core-decorators';
import { Col, Icon, Switch } from 'antd';
import Button, { ButtonGroup } from 'components/UI/Button';
import Badge from 'components/UI/Badge';
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

export default class BadgeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 5,
      show  : true,
    };
  }

  @autobind
  onChange(show) {
    this.setState({ show });
  }

  @autobind
  decline() {
    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({ count });
  }

  @autobind
  increase() {
    const count = this.state.count + 1;
    this.setState({ count });
  }

  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Badge</title>
        </Helmet>
        <PageTitle>Badge</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Basic'
              subtitle='Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it.'
            >
              <ContentWrapper>
                <div className='peers'>
                  <div className='peer pR-20'>
                    <Badge count={99}>
                      <a className='badgeLink'>{' '}</a>
                    </Badge>
                  </div>
                  <div className='peer pR-20'>
                    <Badge count={100}>
                      <a className='badgeLink'>{' '}</a>
                    </Badge>
                  </div>
                </div>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Standalone'
              subtitle='Used in standalone when children is empty.'
            >
              <ContentWrapper>
                <div className='peers'>
                  <div className='peer pR-10'>
                    <Badge count={25} />
                  </div>
                  <div className='peer pR-10'>
                    <Badge
                      count={4}
                      style={{
                        backgroundColor: '#fff',
                        color: '#999',
                        boxShadow: '0 0 0 1px #d9d9d9 inset',
                      }}
                    />
                  </div>
                  <div className='peer'>
                    <Badge count={109} style={{ backgroundColor: '#87d068' }} />
                  </div>
                </div>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Overflow Count'
              subtitle='OverflowCount is displayed when count is larger than overflowCount. The default value of overflowCount is 99.'
            >
              <ContentWrapper>
                <div className='peers'>
                  <div className='peer pR-20'>
                    <Badge count={99}>
                      <a className='badgeLink'>{' '}</a>
                    </Badge>
                  </div>
                  <div className='peer pR-20'>
                    <Badge count={100}>
                      <a className='badgeLink'>{' '}</a>
                    </Badge>
                  </div>
                  <div className='peer pR-20'>
                    <Badge count={99} overflowCount={10}>
                      <a className='badgeLink'>{' '}</a>
                    </Badge>
                  </div>
                  <div className='peer'>
                    <Badge count={1000} overflowCount={999}>
                      <a className='badgeLink'>{' '}</a>
                    </Badge>
                  </div>
                </div>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Red badge'
              subtitle='This will simply display a red badge, without a specific count.'
            >
              <ContentWrapper>
                <Badge dot className='mR-15'>
                  <Icon type='notification' />
                </Badge>
                <Badge dot>
                  <a href='.'>Link something</a>
                </Badge>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well title='Clickable' subtitle='The badge can be wrapped with a tag to make it linkable.'>
              <ContentWrapper>
                <a>
                  <Badge count={5}>
                    <span className='badgeLink' />
                  </Badge>
                </a>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well title='Status' subtitle='Standalone badge with status.'>
              <ContentWrapper>
                <Badge status='success' />
                <Badge status='error' />
                <Badge status='default' />
                <Badge status='processing' />
                <Badge status='warning' />
                <br />
                <br />
                <Badge status='success' text='Success' />
                <br />
                <Badge status='error' text='Error' />
                <br />
                <Badge status='default' text='Default' />
                <br />
                <Badge status='processing' text='Processing' />
                <br />
                <Badge status='warning' text='Warning' />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well title='Dynamic' subtitle='The count will be animated as it changes.'>
              <ContentWrapper>
                <div>
                  <Badge count={this.state.count} className='mR-15'>
                    <a className='badgeLink'>{' '}</a>
                  </Badge>
                  <ButtonGroup>
                    <Button onClick={this.decline}>
                      <Icon type='minus' />
                    </Button>
                    <Button onClick={this.increase}>
                      <Icon type='plus' />
                    </Button>
                  </ButtonGroup>
                </div>
                <div style={{ marginTop: 10 }}>
                  <Badge dot={this.state.show} className='mR-15'>
                    <a className='badgeLink'>{' '}</a>
                  </Badge>
                  <Switch onChange={this.onChange} checked={this.state.show} />
                </div>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
