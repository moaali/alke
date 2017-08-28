import React, { Component } from 'react';
import Main from 'components/Main';
import Sidebar from 'components/Sidebar';

export default class Layout extends Component {
  handleType({ children, type }) {
    if (type === 'full') {
      return (
        <div>
          <Main>
            {children}
          </Main>
        </div>
      );
    }

    if (type === 'main') {
      return (
        <div>
          <Sidebar />
          <Main>
            {children}
          </Main>
        </div>
      );
    }

    return null;
  }

  render() {
    return this.handleType(this.props);
  }
}
