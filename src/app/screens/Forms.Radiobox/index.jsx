import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { Col } from 'antd';
import { Radio } from 'components/UI';
import PageTitle from 'components/Templates/PageTitle';
import Well from 'components/Templates/Well';
import LayoutContainer from 'components/Templates/LayoutContainer';
import ContentWrapper from 'components/Templates/ContentWrapper';
import './index.less';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

const masonryOptions = {
  columnWidth: '.MasonrySizer',
  itemSelector: '.MasonryItem',
  percentPosition: true,
};

const plainOptions = ['Apple', 'Pear', 'Orange'];

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

export default class RadioScreen extends Component {
  state = {
    value1: 'Apple',
    value2: 'Apple',
    value3: 'Apple',
  }

  onChange1 = (e) => {
    this.setState({
      value1: e.target.value,
    });
  }

  onChange2 = (e) => {
    this.setState({
      value2: e.target.value,
    });
  }

  onChange3 = (e) => {
    this.setState({
      value3: e.target.value,
    });
  }

  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Radio</title>
        </Helmet>
        <PageTitle>Radio</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Basic'
              subtitle='The simplest use.'
            >
              <ContentWrapper>
                <Radio>Radio</Radio>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Disabled'
              subtitle='Radio unavailable.'
            >
              <ContentWrapper>
                <Radio defaultChecked={false} disabled={true}>Disabled</Radio>
                <Radio defaultChecked={true} disabled={true}>Disabled</Radio>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='RadioGroup group - optional'
              subtitle='Render radios by configuring options.'
            >
              <ContentWrapper>
                <RadioGroup
                  options={plainOptions}
                  onChange={this.onChange1}
                  value={this.state.value1}
                />
                <RadioGroup
                  options={options}
                  onChange={this.onChange2}
                  value={this.state.value2}
                />
                <RadioGroup
                  options={optionsWithDisabled}
                  onChange={this.onChange3}
                  value={this.state.value3}
                />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Radio style'
              subtitle='The combination of radio button style.'
            >
              <ContentWrapper>
                <div>
                  <RadioGroup defaultValue='a'>
                    <RadioButton value='a'>Hangzhou</RadioButton>
                    <RadioButton value='b'>Shanghai</RadioButton>
                    <RadioButton value='c'>Beijing</RadioButton>
                    <RadioButton value='d'>Chengdu</RadioButton>
                  </RadioGroup>
                </div>
                <div style={{ marginTop: 16 }}>
                  <RadioGroup defaultValue='a'>
                    <RadioButton value='a'>Hangzhou</RadioButton>
                    <RadioButton value='b' disabled>Shanghai</RadioButton>
                    <RadioButton value='c'>Beijing</RadioButton>
                    <RadioButton value='d'>Chengdu</RadioButton>
                  </RadioGroup>
                </div>
                <div style={{ marginTop: 16 }}>
                  <RadioGroup disabled defaultValue='a'>
                    <RadioButton value='a'>Hangzhou</RadioButton>
                    <RadioButton value='b'>Shanghai</RadioButton>
                    <RadioButton value='c'>Beijing</RadioButton>
                    <RadioButton value='d'>Chengdu</RadioButton>
                  </RadioGroup>
                </div>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
