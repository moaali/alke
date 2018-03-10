import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { autobind } from 'core-decorators';
import Masonry from 'react-masonry-component';
import { Col } from 'antd';
import Tag from 'components/UI/Tag';
import PageTitle from 'components/Templates/PageTitle';
import Well from 'components/Templates/Well';
import LayoutContainer from 'components/Templates/LayoutContainer';
import ContentWrapper from 'components/Templates/ContentWrapper';
import './index.less';

const { CheckableTag } = Tag;

const masonryOptions = {
  columnWidth: '.MasonrySizer',
  itemSelector: '.MasonryItem',
  percentPosition: true,
};

const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports'];

function preventDefault(e) {
  e.preventDefault();
}

export default class TagScreen extends Component {
  state = {
    selectedTags: [],
    checked: true,
  };

  @autobind
  handleChecked(checked) {
    this.setState({ checked });
  }

  @autobind
  handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    this.setState({ selectedTags: nextSelectedTags });
  }

  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Tag</title>
        </Helmet>
        <PageTitle>Tag</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Basic'
              subtitle='Usage of basic Tag, and it could be closable by set closable property. Closable Tag supports onClose afterClose events.'
            >
              <ContentWrapper>
                <Tag>Tag 1</Tag>
                <Tag><a href='https://github.com/ant-design/ant-design/issues/1862'>Link</a></Tag>
                <Tag closable>Tag 2</Tag>
                <Tag closable onClose={preventDefault}>Prevent Default</Tag>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Colorful Tag'
              subtitle='After antd@2.7.0, We preset a series of colorful tag style for different situation usage. And you can always set it to a hex color string for custom color.'
            >
              <ContentWrapper>
                <h4 style={{ marginBottom: 16 }}>Presets:</h4>
                <div>
                  <Tag color='pink'>pink</Tag>
                  <Tag color='red'>red</Tag>
                  <Tag color='orange'>orange</Tag>
                  <Tag color='green'>green</Tag>
                  <Tag color='cyan'>cyan</Tag>
                  <Tag color='blue'>blue</Tag>
                  <Tag color='purple'>purple</Tag>
                </div>
                <h4 style={{ margin: '16px 0' }}>Custom:</h4>
                <div>
                  <Tag color='#f50'>#f50</Tag>
                  <Tag color='#2db7f5'>#2db7f5</Tag>
                  <Tag color='#87d068'>#87d068</Tag>
                  <Tag color='#108ee9'>#108ee9</Tag>
                </div>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Hot Tags'
              subtitle='Select your favourite topics.'
            >
              <ContentWrapper>
                <strong style={{ marginRight: 8 }}>Categories:</strong>
                {tagsFromServer.map(tag => (
                  <CheckableTag
                    key={tag}
                    checked={this.state.selectedTags.indexOf(tag) > -1}
                    onChange={checked => this.handleChange(tag, checked)}
                  >
                    {tag}
                  </CheckableTag>
                ))}
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
