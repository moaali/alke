import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from 'shared/config/routes';
import { Menu } from 'antd';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import {
  MdCheck,         MdContacts,
  MdCompareArrows, MdCheckBox,
  MdAutorenew,     MdMap,
  MdList,          MdFormatListNumbered,
  MdModeEdit,      MdInput,
  MdDashboard,     MdDataUsage,
  MdPieChart,      MdMultilineChart,
  MdPages,         MdTab,
  MdAdd,           MdRadioButtonChecked,
  MdNote,          MdEmail,
  MdExtension,
} from 'react-icons/lib/md';

import './index.less';

const { SubMenu } = Menu;

const
  NavText = ({ icon, title, ...rest }) => (
    <span className='menuItemText d-b' {...rest}>
      {
        /* eslint-disable */
        do {
          if (typeof icon === 'string') {
            <i className={`${icon}} d-ib va-m`} />
          } else {
            const Icon = icon;
            <Icon className='menuIcon fz-large d-ib va-m' />
          }
        }
        /* eslint-enable */
      }
      <span className='nav-text d-ib va-m'>{title}</span>
    </span>
  );

NavText.propTypes = {
  title : PropTypes.string.isRequired,
  icon  : PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
};

const
  Item = ({ Key, to, icon, title, ...rest }) => (
    <Menu.Item key={Key} {...rest}>
      <Link to={to}>
        <NavText icon={icon} title={title} />
      </Link>
    </Menu.Item>
  );

Item.propTypes = {
  Key   : PropTypes.string.isRequired,
  to    : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  icon  : PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
};

const
  SubItem = ({ Key, to, title, ...rest }) => (
    <Menu.Item key={Key} {...rest}>
      <Link to={to}>
        {title}
      </Link>
    </Menu.Item>
  );

SubItem.propTypes = {
  Key   : PropTypes.string.isRequired,
  to    : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
};

@inject('AppStore')
@observer
export default class Sidebar extends Component {
  static propTypes = {
    AppStore: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.store = this.props.AppStore;
  }

  render() {
    return (
      <Menu
        theme='dark'
        mode={this.store.isCollapsed() === true ? 'vertical' : 'inline'}
        className='isoDashboardMenu'
        defaultSelectedKeys={['Dashboard']}
      >
        <Item Key='Dashboard' to={PAGES.Dashboard.path} icon={MdDashboard} title='Dashboard' />
        <Item Key='Email' to={PAGES.Email.path} icon={MdEmail} title='Email' />
        <Item Key='GoogleMaps' to={PAGES.GoogleMaps.path} icon={MdMap} title='Google Maps' />
        <Item Key='Contacts' to={PAGES.Contacts.path} icon={MdContacts} title='Contacts' />
        <Item Key='Notes' to={PAGES.Notes.path} icon={MdNote} title='Notes' />
        <Item Key='Todos' to={PAGES.Todos.path} icon={MdFormatListNumbered} title='Todos' />
        <Item Key='Tables' to={PAGES.Tables.path} icon={MdDataUsage} title='Tables' />
        <Item Key='BlankPage' to={PAGES.BlankPage.path} icon={MdAdd} title='Blank' />

        <SubMenu
          key='Charts'
          title={<NavText icon={MdPieChart} title='Charts' />}
        >
          <Item icon={MdPieChart} Key='Recharts' to={PAGES.Recharts.path} title='Recharts' />
          <Item icon={MdMultilineChart} Key='Victory' to={PAGES.Victory.path} title='Victory' />
        </SubMenu>

        <SubMenu
          key='Forms'
          title={<NavText icon={MdInput} title='Forms' />}
        >
          <Item icon={MdRadioButtonChecked} Key='Radiobox' to={PAGES.Radiobox.path} title='Radiobox' />
          <Item icon={MdTab} Key='Tab' to={PAGES.Tabs.path} title='Tab' />
          <Item icon={MdCompareArrows} Key='Transfer' to={PAGES.Transfer.path} title='Transfer' />
          <Item icon={MdCheck} Key='ValidatableForms' to={PAGES.ValidatableForms.path} title='Validatable Forms' />
          <Item icon={MdList} Key='AutoComplete' to={PAGES.AutoComplete.path} title='AutoComplete' />
          <Item icon={MdExtension} Key='Button' to={PAGES.Button.path} title='Button' />
          <Item icon={MdCheckBox} Key='Checkbox' to={PAGES.Checkbox.path} title='Checkbox' />
          <Item icon={MdModeEdit} Key='Editor' to={PAGES.Editor.path} title='Editor' />
          <Item icon={MdInput} Key='Inputs' to={PAGES.Inputs.path} title='Inputs' />
          <Item icon={MdAutorenew} Key='Progress' to={PAGES.Progress.path} title='Progress' />
        </SubMenu>

        <SubMenu
          key='Pages'
          title={<NavText icon={MdDashboard} title='Pages' />}
        >
          <Item icon={MdPages} Key='Login' to={PAGES.Login.path} title='Login' />
          <Item icon={MdPages} Key='ForgotPasswords' to={PAGES.ForgotPasswords.path} title='Forgot Passwords' />
          <Item icon={MdPages} Key='ResetPasswords' to={PAGES.ResetPasswords.path} title='Reset Passwords' />
          <Item icon={MdPages} Key='Register' to={PAGES.Register.path} title='Register' />
          <Item icon={MdPages} Key='ServerError' to={PAGES.ServerError.path} title='500' />
          <Item icon={MdPages} Key='NotFound' to='/404' title='404' />
        </SubMenu>

        <SubMenu
          key='UI Elements'
          title={<NavText icon={MdExtension} title='UI Elements' />}
        >
          <Item icon={MdExtension} Key='Notification' to={PAGES.Notification.path} title='Notification' />
          <Item icon={MdExtension} Key='Pagination' to={PAGES.Pagination.path} title='Pagination' />
          <Item icon={MdExtension} Key='Popover' to={PAGES.Popover.path} title='Popover' />
          <Item icon={MdExtension} Key='PopConfirm' to={PAGES.PopConfirm.path} title='Pop Confirm' />
          <Item icon={MdExtension} Key='Rating' to={PAGES.Rating.path} title='Rating' />
          <Item icon={MdExtension} Key='ReactDates' to={PAGES.ReactDates.path} title='React Dates' />
          <Item icon={MdExtension} Key='Tag' to={PAGES.Tag.path} title='Tag' />
          <Item icon={MdExtension} Key='Timeline' to={PAGES.Timeline.path} title='Timeline' />
          <Item icon={MdExtension} Key='Tooltip' to={PAGES.Tooltip.path} title='Tooltip' />
          <Item icon={MdExtension} Key='Tree' to={PAGES.Tree.path} title='Tree' />
          <Item icon={MdExtension} Key='UppyUploader' to={PAGES.UppyUploader.path} title='Uppy Uploader' />
          <Item icon={MdExtension} Key='Alert' to={PAGES.Alert.path} title='Alert' />
          <Item icon={MdExtension} Key='Badge' to={PAGES.Badge.path} title='Badge' />
          <Item icon={MdExtension} Key='Card' to={PAGES.Card.path} title='Card' />
          <Item icon={MdExtension} Key='Carousel' to={PAGES.Carousel.path} title='Carousel' />
          <Item icon={MdExtension} Key='Collapse' to={PAGES.Collapse.path} title='Collapse' />
          <Item icon={MdExtension} Key='DropZone' to={PAGES.DropZone.path} title='DropZone' />
          <Item icon={MdExtension} Key='Message' to={PAGES.Message.path} title='Message' />
          <Item icon={MdExtension} Key='Modal' to={PAGES.Modal.path} title='Modal' />
        </SubMenu>
      </Menu>
    );
  }
}
