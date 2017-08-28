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
import 'bootstrap/dist/css/bootstrap.css';
import App from './app';
import stores from './app/shared/stores';

es6Promise.polyfill();

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
  module.hot.accept('./app', () => {
    const NewApp = require('./app').default;

    render(NewApp);
  });
}
