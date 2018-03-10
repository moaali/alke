import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { Button } from 'components';
import './index.less';

@inject('ContactsStore')
@observer
export default class Actions extends Component {
  static propTypes = {
    ContactsStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.ContactsStore;
  }

  @autobind
  handleSave() {
    this.store.toggleEditMode();
    this.store.save();
  }

  @autobind
  handleEdit() {
    this.store.toggleEditMode();
  }

  @autobind
  handleAdd() {
    this.store.addContact();

    if (!this.store.isEditMode()) {
      this.store.toggleEditMode();
    }
  }

  @autobind
  handleDelete() {
    const id = this.store.getShown();
    this.store.deleteContact(id);
  }

  render() {
    return (
      <div className='ContactsActions pos-r bdB'>
        <div className='pos-a r-15 peers centerY h-auto'>
          {
            do {
              if (this.store.getShown()) {
                <div className='peers'>
                  <div className='peer'>
                    {
                      do {
                        if (this.store.isEditMode()) {
                          <Button onClick={this.handleSave}>Save</Button>
                        } else {
                          <Button onClick={this.handleEdit}>Edit</Button>
                        }
                      }
                    }
                  </div>
                  <div className='peer mX-15'>
                    <Button type='danger' ghost onClick={this.handleDelete}>Delete</Button>
                  </div>
                </div>
              }
            }
          }
          <div className='peer'>
            <Button onClick={this.handleAdd}>Add</Button>
          </div>
        </div>
      </div>
    );
  }
}
