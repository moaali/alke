import React, { Component } from 'react';

export default class Name extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return (
      <div>dashboard conteent</div>
    );
  }
}
