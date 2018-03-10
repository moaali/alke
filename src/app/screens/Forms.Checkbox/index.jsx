import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { Col, Row } from 'antd';
import Button from 'components/UI/Button';
import Checkbox from 'components/UI/Checkbox';
import PageTitle from 'components/Templates/PageTitle';
import Well from 'components/Templates/Well';
import LayoutContainer from 'components/Templates/LayoutContainer';
import ContentWrapper from 'components/Templates/ContentWrapper';
import './index.less';

const CheckboxGroup = Checkbox.Group;

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

export default class CheckboxScreen extends Component {
  state = {
    checked: true,
    disabled: false,
  }

  onChange = (e) => {
    console.log('checked = ', e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  }

  toggleChecked = () => {
    this.setState({ checked: !this.state.checked });
  }

  toggleDisable = () => {
    this.setState({ disabled: !this.state.disabled });
  }

  render() {
    const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`;

    return (
      <LayoutContainer>
        <Helmet>
          <title>Checkbox</title>
        </Helmet>
        <PageTitle>Checkbox</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Basic'
              subtitle='Basic usage of checkbox.'
            >
              <ContentWrapper>
                <div className='peers'>
                  <div className='peer pR-15'>
                    <Checkbox>Checkbox</Checkbox>
                  </div>
                </div>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Disabled'
              subtitle='Disabled checkbox.'
            >
              <ContentWrapper>
                <div className='peers'>
                  <div className='peer pR-15'>
                    <Checkbox defaultChecked={false} disabled />
                  </div>
                  <div className='peer pR-15'>
                    <Checkbox defaultChecked disabled />
                  </div>
                </div>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Controlled Checkbox'
              subtitle='Communicated with other components.'
            >
              <ContentWrapper>
                <div className='peers'>
                  <div className='peer pR-15'>
                    <p style={{ marginBottom: '20px' }}>
                      <Checkbox
                        checked={this.state.checked}
                        disabled={this.state.disabled}
                        onChange={this.onChange}
                      >
                        {label}
                      </Checkbox>
                    </p>
                    <p>
                      <Button
                        type='primary'
                        size='small'
                        onClick={this.toggleChecked}
                      >
                        {!this.state.checked ? 'Check' : 'Uncheck'}
                      </Button>
                      <Button
                        style={{ marginLeft: '10px' }}
                        type='primary'
                        size='small'
                        onClick={this.toggleDisable}
                      >
                        {!this.state.disabled ? 'Disable' : 'Enable'}
                      </Button>
                    </p>
                  </div>
                </div>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Checkbox Group'
              subtitle='Generate a group of checkboxes from an array.'
            >
              <ContentWrapper>
                <CheckboxGroup options={plainOptions} defaultValue={['Apple']} />
                <br />
                <CheckboxGroup options={options} defaultValue={['Pear']} />
                <br />
                <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} />
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Use with Grid'
              subtitle='We can use Checkbox and Grid in Checkbox.Group, to implement complex layout.'
            >
              <ContentWrapper>
                <CheckboxGroup>
                  <Row>
                    <Col span={8}><Checkbox value='A'>A</Checkbox></Col>
                    <Col span={8}><Checkbox value='B'>B</Checkbox></Col>
                    <Col span={8}><Checkbox value='C'>C</Checkbox></Col>
                    <Col span={8}><Checkbox value='D'>D</Checkbox></Col>
                    <Col span={8}><Checkbox value='E'>E</Checkbox></Col>
                  </Row>
                </CheckboxGroup>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
