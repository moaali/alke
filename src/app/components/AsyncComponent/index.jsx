import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPlaceholder from 'react-placeholder';
import { observer } from 'mobx-react';
import AsyncComponentStore from 'shared/stores/asyncComponentStore';
import 'react-placeholder/lib/reactPlaceholder.css';

@observer
export default class AsyncComponent extends Component {
  static propTypes = {
    componentArguement : PropTypes.any,
    componentProps     : PropTypes.any,
    load               : PropTypes.any,
  }

  async componentDidMount() {
    const
      props = this.props,
      args  = props.componentArguement,
      Unit  = await props.load;

    let Target;

    switch (args) {
      case 'googleChart':
        Target = Unit.Chart;
        break;
      default:
        Target = Unit.default;
    }

    AsyncComponentStore.setTarget(<Target {...props.componentProps} />);
  }

  render() {
    const
      Unit = AsyncComponentStore.getTarget() || <div />;

    return (
      <ReactPlaceholder
        type='text'
        rows={5}
        ready={Unit !== undefined}
      >
        {Unit}
      </ReactPlaceholder>
    );
  }
}
