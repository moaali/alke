import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { Col } from 'antd';
import Pagination from 'components/UI/Pagination';
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

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}

function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

function showTotal(total) {
  return `Total ${total} items`;
}

function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a>Previous</a>;
  } else if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
}

export default class PaginationScreen extends Component {
  state = {
    current: 3,
  }

  onChange = (page) => {
    this.setState({
      current: page,
    });
  }

  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Pagination</title>
        </Helmet>
        <PageTitle>Pagination</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Basic'
              subtitle='Basic pagination.'
            >
              <ContentWrapper>
                <Pagination defaultCurrent={1} total={50} />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='More'
              subtitle='More pages.'
            >
              <ContentWrapper>
                <Pagination defaultCurrent={6} total={500} />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Changer'
              subtitle='Change pageSize.'
            >
              <ContentWrapper>
                <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Jumper'
              subtitle='Jump to a page directly.'
            >
              <ContentWrapper>
                <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />,
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Mini size'
              subtitle='Mini size pagination.'
            >
              <ContentWrapper>
                <Pagination size='small' total={50} />
                <br />
                <br />
                <Pagination size='small' total={50} showSizeChanger showQuickJumper />
                <br />
                <br />
                <Pagination size='small' total={50} showTotal={showTotal} />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Simple mode'
              subtitle='Simple mode.'
            >
              <ContentWrapper>
                <Pagination simple defaultCurrent={2} total={50} />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Controlled'
              subtitle='Controlled page number.'
            >
              <ContentWrapper>
                <Pagination current={this.state.current} onChange={this.onChange} total={50} />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Total number'
              subtitle='You can show the total number of data by setting showTotal.'
            >
              <ContentWrapper>
                <Pagination
                  total={85}
                  showTotal={total => `Total ${total} items`}
                  pageSize={20}
                  defaultCurrent={1}
                />
                <br />
                <Pagination
                  total={85}
                  showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                  pageSize={20}
                  defaultCurrent={1}
                />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Prev and next'
              subtitle='Use text link for prev and next button.'
            >
              <ContentWrapper>
                <Pagination total={500} itemRender={itemRender} />
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
