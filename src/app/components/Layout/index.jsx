import React, { Component } from 'react';
import Main from 'components/Main';
import { withRouter } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Topbar from 'components/Topbar';
import Footer from 'components/Footer';

@withRouter
export default class Layout extends Component {
  handleType({ children, type }) {
    if (type === 'noSidebar') {
      return (
        <div>
          <Main>
            {children}
          </Main>
        </div>
      );
    }

    if (type === 'withSidebar') {
      return (
        <div>
          <Sidebar />
          <Topbar />
          <Main>
            <Topbar />
            {children}
            <Footer />
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
