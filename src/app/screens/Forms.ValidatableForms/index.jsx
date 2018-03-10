import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { Col } from 'antd';

import {
  Form,
  DatePicker,
  TimePicker,
  Cascader,
  InputNumber,
  Select,
  Input,
  PageTitle,
  Well,
  LayoutContainer,
  ContentWrapper,
} from 'components';

import './index.less';

const FormItem = Form.Item;
const Option = Select.Option;

const masonryOptions = {
  columnWidth: '.MasonrySizer',
  itemSelector: '.MasonryItem',
  percentPosition: true,
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

export default class ValidatableFormsScreen extends Component {
  render() {
    return (
      <LayoutContainer>
        <Helmet>
          <title>Validatable Forms</title>
        </Helmet>
        <PageTitle>Validatable Forms</PageTitle>
        <Masonry className='Masonry' options={masonryOptions}>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem MasonryItem-full'>
            <Well
              title='Customized Validation'
              subtitle='We provide properties like validateStatus help hasFeedback to customize your own validate status and message, without using Form.create and getFieldDecorator.'
            >
              <ContentWrapper>
                <Form>
                  <FormItem
                    {...formItemLayout}
                    label='Fail'
                    validateStatus='error'
                    help='Should be combination of numbers & alphabets'
                  >
                    <Input placeholder='unavailable choice' id='error' />
                  </FormItem>

                  <FormItem
                    {...formItemLayout}
                    label='Warning'
                    validateStatus='warning'
                  >
                    <Input placeholder='Warning' id='warning' />
                  </FormItem>

                  <FormItem
                    {...formItemLayout}
                    label='Validating'
                    hasFeedback
                    validateStatus='validating'
                    help='The information is being validated...'
                  >
                    <Input placeholder='Iam the content is being validated' id='validating' />
                  </FormItem>

                  <FormItem
                    {...formItemLayout}
                    label='Success'
                    hasFeedback
                    validateStatus='success'
                  >
                    <Input placeholder='Iam the content' id='success' />
                  </FormItem>

                  <FormItem
                    {...formItemLayout}
                    label='Warning'
                    hasFeedback
                    validateStatus='warning'
                  >
                    <Input placeholder='Warning' id='warning' />
                  </FormItem>

                  <FormItem
                    {...formItemLayout}
                    label='Fail'
                    hasFeedback
                    validateStatus='error'
                    help='Should be combination of numbers & alphabets'
                  >
                    <Input placeholder='unavailable choice' id='error' />
                  </FormItem>

                  <FormItem
                    {...formItemLayout}
                    label='Success'
                    hasFeedback
                    validateStatus='success'
                  >
                    <DatePicker style={{ width: '100%' }} />
                  </FormItem>

                  <FormItem
                    {...formItemLayout}
                    label='Warning'
                    hasFeedback
                    validateStatus='warning'
                  >
                    <TimePicker style={{ width: '100%' }} />
                  </FormItem>

                  <FormItem
                    {...formItemLayout}
                    label='Error'
                    hasFeedback
                    validateStatus='error'
                  >
                    <Select defaultValue='1'>
                      <Option value='1'>Option 1</Option>
                      <Option value='2'>Option 2</Option>
                      <Option value='3'>Option 3</Option>
                    </Select>
                  </FormItem>

                  <FormItem
                    {...formItemLayout}
                    label='Validating'
                    hasFeedback
                    validateStatus='validating'
                    help='The information is being validated...'
                  >
                    <Cascader defaultValue={['1']} options={[]} />
                  </FormItem>

                  <FormItem
                    label='inline'
                    {...formItemLayout}
                  >
                    <Col span={11}>
                      <FormItem validateStatus='error' help='Please select the correct date'>
                        <DatePicker />
                      </FormItem>
                    </Col>
                    <Col span={2}>
                      <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                        -
                      </span>
                    </Col>
                    <Col span={11}>
                      <FormItem>
                        <DatePicker />
                      </FormItem>
                    </Col>
                  </FormItem>

                  <FormItem
                    {...formItemLayout}
                    label='Success'
                    hasFeedback
                    validateStatus='success'
                  >
                    <InputNumber style={{ width: '100%' }} />
                  </FormItem>
                </Form>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
