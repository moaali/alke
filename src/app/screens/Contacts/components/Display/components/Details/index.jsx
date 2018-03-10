import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Input, Form, Upload, Button, Icon } from 'components';
import './index.less';

const FormItem = Form.Item;
const { TextArea } = Input;

@inject('ContactsStore')
@observer
export default class Details extends Component {
  static propTypes = {
    ContactsStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.ContactsStore;
    this.state = {
      fileList: [],
      uploading: false,
    };
  }

  @autobind
  getId() {
    return this.store.getShown();
  }

  @autobind
  getContact() {
    return this.store.getContact(this.getId());
  }

  @autobind
  handleUpload() {
    this.setState({
      uploading: true,
    });
  }

  @autobind
  handleChange(e) {
    const id = this.getId();
    this.store.setContactInfo(id, e.target.name, e.target.value);
  }

  render() {
    const { getContactName } = this.store;
    const isEditMode = this.store.isEditMode();
    const contact = this.getContact();

    const inputCondProps = {
      ...(!isEditMode && { readOnly: true }),
    };

    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      onRemove: (file) => { console.log(file); },
      beforeUpload: (file) => { console.log(file); },
      fileList: [],
    };

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };

    return (
      <Scrollbars style={{ height: '100vh' }}>
        <div className={classNames('ContactDetails pos-r p-40', { 'withEditMode': isEditMode })}>
          {
            do {
              if (!this.getId()) {
                <div className='pos-a centerXY'>
                  <p>No Contact To Show</p>
                </div>
              } else {
                <div className='peers'>
                  <div className='peer ta-c contactPreview'>
                    <div className='d-ib'>
                      <img
                        src={contact.avatar}
                        alt={getContactName(this.getId())}
                        className='bdrs-50 contactAvatar-big'
                      />
                      <h3>{getContactName(this.getId())}</h3>
                    </div>
                  </div>
                  <div className='peer peer-greed pL-40'>
                    <Form>
                      {
                        do {
                          if (isEditMode) {
                            <FormItem
                              {...formItemLayout}
                              label='Contact Image'
                            >
                              <Upload {...props}>
                                <Button>
                                  <Icon type='upload' /> Upload Image
                                </Button>
                              </Upload>
                            </FormItem>
                          }
                        }
                      }
                      <FormItem
                        {...formItemLayout}
                        label='First Name'
                      >
                        <Input
                          onChange={this.handleChange}
                          name='firstName'
                          value={contact.firstName}
                          type='text'
                          {...inputCondProps}
                        />
                      </FormItem>
                      <FormItem
                        {...formItemLayout}
                        label='Last Name'
                      >
                        <Input
                          onChange={this.handleChange}
                          name='lastName'
                          value={contact.lastName}
                          type='text'
                          {...inputCondProps}
                        />
                      </FormItem>
                      <FormItem
                        {...formItemLayout}
                        label='Email'
                      >
                        <Input
                          onChange={this.handleChange}
                          name='email'
                          value={contact.email}
                          type='email'
                          {...inputCondProps}
                        />
                      </FormItem>
                      <FormItem
                        {...formItemLayout}
                        label='Mobile Phone'
                      >
                        <Input
                          onChange={this.handleChange}
                          name='mobile'
                          value={contact.mobile}
                          type='text'
                          {...inputCondProps}
                        />
                      </FormItem>
                      <FormItem
                        {...formItemLayout}
                        label='Home Phone'
                      >
                        <Input
                          onChange={this.handleChange}
                          name='home'
                          value={contact.home}
                          type='text'
                          {...inputCondProps}
                        />
                      </FormItem>
                      <FormItem
                        {...formItemLayout}
                        label='Work Phone'
                      >
                        <Input
                          onChange={this.handleChange}
                          name='work'
                          value={contact.work}
                          type='text'
                          {...inputCondProps}
                        />
                      </FormItem>
                      <FormItem
                        {...formItemLayout}
                        label='Note'
                      >
                        <TextArea
                          value={contact.note}
                          name='note'
                          {...inputCondProps}
                        />
                      </FormItem>
                    </Form>
                  </div>
                </div>
              }
            }
          }
        </div>
      </Scrollbars>
    );
  }
}
