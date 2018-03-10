import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { autobind } from 'core-decorators';
import { EmailList, EmailNavigation, EmailViewer, EmailComposeView } from './components';
import './index.less';

@inject('EmailsStore', 'AppStore')
@observer
export default class EmailScreen extends Component {
  static propTypes = {
    EmailsStore : PropTypes.object,
    AppStore    : PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.EmailsStore = this.props.EmailsStore;
    this.AppStore    = this.props.AppStore;
  }

  @autobind
  handleNavClick() {
    if (this.AppStore.getView() !== 'DesktopView') {
      this.EmailsStore.toggleNav();
    }
  }

  render() {
    const view = this.AppStore.getView();

    const isNavShown = do {
      if (view !== 'DesktopView') {
        this.EmailsStore.isNavToggled();
      }
    };

    const isViewerShown = do {
      if (view === 'MobileView' && this.EmailsStore.getCurrentEmail()) {
        this.EmailsStore.isViewerToggled();
      }
    };

    return (
      <div
        id='emailScreen'
        className={
          classNames('peers peers-nw ai-s', {
            MobileView  : view === 'MobileView',
            TabletView  : view === 'TabletView',
            DesktopView : view === 'DesktopView',
          })
        }
      >
        <div
          className={
            classNames('emailNavBox peer', {
              'shown': isNavShown,
            })
          }
          onClick={this.handleNavClick}
        >
          <EmailNavigation />
        </div>
        {
          do {
            if (this.EmailsStore.isComposeOpened() === false) {
              <div className='emailListBox peer bdR bdL'>
                <EmailList />
              </div>
            }
          }
        }

        {
          do {
            if (this.EmailsStore.isComposeOpened() === false) {
              <div
                className={
                  classNames('emailViewBox peer peer-greed', {
                    'shown': isViewerShown,
                  })
                }
              >
                <EmailViewer />
              </div>
            }
          }
        }

        {
          do {
            if (this.EmailsStore.isComposeOpened() === true) {
              <div className='peer peer-greed bdL'>
                <EmailComposeView />
              </div>
            }
          }
        }
      </div>
    );
  }
}
