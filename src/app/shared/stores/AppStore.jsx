import { observable } from 'mobx';
import { sidebarTheme } from 'shared/config/theme';

class AppStore {
  @observable windowWidth  = null;
  @observable windowHeight = null;
  @observable layout       = undefined;
  @observable collapsed    = false;
  @observable view         = null;

  @observable theme = {
    sidebar: sidebarTheme.default,
  }

  constructor() {
    this.layouts = {
      noSidebar: [
        '/',
        '/404',
        '/500',
        '/forgot-password',
        '/reset-password',
        '/register',
      ],
    };
  }

  getTheme(element) {
    return this.theme[element];
  }

  setTheme(target, theme) {
    this.theme[target] = sidebarTheme[theme];
  }

  getDimentions() {
    return {
      windowWidth  : this.windowWidth,
      windowHeight : this.windowHeight,
    };
  }

  getView() {
    return this.view;
  }

  setView() {
    const width = this.getDimentions().windowWidth;

    if (width < 768) {
      this.view = 'MobileView';
    } else if (width >= 768 && width <= 1024) {
      this.view = 'TabletView';
    } else {
      this.view = 'DesktopView';
    }
  }

  setDimentions(windowWidth = null, windowHeight = null) {
    this.windowWidth  = windowWidth;
    this.windowHeight = windowHeight;
  }

  getLayout() {
    return this.layout;
  }

  setLayout(pathname) {
    if (this.layouts.noSidebar.includes(pathname)) {
      this.layout = 'noSidebar';
    } else {
      this.layout = 'withSidebar';
    }
  }

  isCollapsed() {
    return this.collapsed;
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
}

export default new AppStore();
