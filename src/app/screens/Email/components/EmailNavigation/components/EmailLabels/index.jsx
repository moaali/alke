import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import { Radio, Icon } from 'components';

const RadioButton = Radio.Button;
const RadioGroup  = Radio.Group;

@inject('EmailsStore')
@observer
export default class EmailLabels extends Component {
  static propTypes = {
    EmailsStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.EmailsStore;
  }

  @autobind
  handleCheck(e) {
    this.store.setCurrentLabel(e.target.value);
    this.store.setCurrentEmail(null);
  }

  render() {
    const cats = this.store.getLabels().map(label => (
      <RadioButton key={label} value={label}>
        <div className='peers peers-nw peers-c peers-sb'>
          <div className='peer peer-greed'>
            <Icon type='tag' />
            <span className='mL-15'>{label}</span>
          </div>
          {
            do {
              if (this.store.getLabelSize(label) !== 0) {
                <div className='peer'>
                  <small>
                    <b>{this.store.getLabelSize(label)}</b>
                  </small>
                </div>
              }
            }
          }
        </div>
      </RadioButton>
    ));

    return (
      <div>
        <h4 className='mB-15'>Labels</h4>
        <RadioGroup className='w-100' onChange={this.handleCheck} defaultValue=''>
          <RadioButton value='' className='peers peers-nw peers-c'>
            <div className='peers peers-nw peers-c peers-sb'>
              <div className='peer peer-greed'>
                <Icon type='tag' />
                <span className='mL-15'>All</span>
              </div>
              {
                do {
                  if (this.store.getLabelSize() !== 0) {
                    <div className='peer'>
                      <small>
                        <b>{this.store.getLabelSize()}</b>
                      </small>
                    </div>
                  }
                }
              }
            </div>
          </RadioButton>
          {cats}
        </RadioGroup>
      </div>
    );
  }
}
