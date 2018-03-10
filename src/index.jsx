import 'react-dates/initialize';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import es6Promise from 'es6-promise';
import { Provider } from 'mobx-react';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import 'babel-polyfill';
import 'whatwg-fetch';
import 'shared/styles/index.less';
import 'funkcss';
import App from './app';
import stores from './app/shared/stores';
import './app/shared/styles/utils/gutter.scss';

es6Promise.polyfill();

/**
 * NOTE: Trigger resize event for Masonry layout
 * after window load
 */
const EVENT = document.createEvent('UIEvents');
window.EVENT = EVENT;
EVENT.initUIEvent('resize', true, false, window, 0);
window.addEventListener('load', () => {
  window.dispatchEvent(EVENT);
  document.addEventListener('click', () => {
    window.dispatchEvent(EVENT);
  }, true);
});

const
  render = Component => {
    ReactDom.render(
      <Provider {...stores}>
        <LocaleProvider locale={enUS}>
          <AppContainer>
            <Router>
              <Component />
            </Router>
          </AppContainer>
        </LocaleProvider>
      </Provider>,
      document.getElementById('root')
    );
  };

render(App);

if (module.hot) {
  module.hot.accept();
}

