import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { forOwn, findKey } from 'lodash';
import md5 from 'js-md5';

import Dashboard         from 'screens/Dashboard';
import Contacts          from 'screens/Contacts';
import BlankPage         from 'screens/BlankPage';
import Notes             from 'screens/Notes';
import GoogleMaps        from 'screens/GoogleMaps';
import Tables            from 'screens/Tables';
import Email             from 'screens/Email';
import Todos             from 'screens/Todos';

import Radiobox          from 'screens/Forms.Radiobox';
import Tabs              from 'screens/Forms.Tabs';
import Transfer          from 'screens/Forms.Transfer';
import ValidatableForms  from 'screens/Forms.ValidatableForms';
import AutoComplete      from 'screens/Forms.AutoComplete';
import Button            from 'screens/Forms.Button';
import Checkbox          from 'screens/Forms.Checkbox';
import Editor            from 'screens/Forms.Editor';
import Inputs            from 'screens/Forms.Inputs';

import Login             from 'screens/Pages.Login';
import ForgotPasswords   from 'screens/Pages.ForgotPassword';
import ResetPasswords    from 'screens/Pages.ResetPassword';
import Register          from 'screens/Pages.Register';
import NotFound          from 'screens/Pages.404';
import ServerError       from 'screens/Pages.500';

import Notification      from 'screens/UI.Notification';
import Pagination        from 'screens/UI.Pagination';
import Popover           from 'screens/UI.Popover';
import PopConfirm        from 'screens/UI.PopConfirm';
import Rating            from 'screens/UI.Rating';
import ReactDates        from 'screens/UI.ReactDates';
import Tag               from 'screens/UI.Tag';
import Timeline          from 'screens/UI.Timeline';
import Tooltip           from 'screens/UI.Tooltip';
import Tree              from 'screens/UI.Tree';
import UppyUploader      from 'screens/UI.UppyUploader';
import Alert             from 'screens/UI.Alert';
import Badge             from 'screens/UI.Badge';
import Card              from 'screens/UI.Card';
import Carousel          from 'screens/UI.Carousel';
import Collapse          from 'screens/UI.Collapse';
import DropZone          from 'screens/UI.DropZone';
import Message           from 'screens/UI.Message';
import Modal             from 'screens/UI.Modal';
import Progress          from 'screens/UI.Progress';

import Recharts          from 'screens/Charts.Recharts';
import Victory           from 'screens/Charts.Victory';

export const
  PAGES = {
    Login            : { path: '/',                  component: Login },
    Dashboard        : { path: '/dashboard',         component: Dashboard },
    Contacts         : { path: '/contacts',          component: Contacts },
    Email            : { path: '/email',             component: Email },
    Radiobox         : { path: '/radiobox',          component: Radiobox },
    Tabs             : { path: '/tabs',              component: Tabs },
    Transfer         : { path: '/transfer',          component: Transfer },
    ValidatableForms : { path: '/validatable-forms', component: ValidatableForms },
    AutoComplete     : { path: '/autocomplete',      component: AutoComplete },
    Button           : { path: '/button',            component: Button },
    Checkbox         : { path: '/checkbox',          component: Checkbox },
    Editor           : { path: '/editor',            component: Editor },
    Inputs           : { path: '/inputs',            component: Inputs },
    Progress         : { path: '/progress',          component: Progress },
    GoogleMaps       : { path: '/google-maps',       component: GoogleMaps },
    Notes            : { path: '/notes',             component: Notes },
    ForgotPasswords  : { path: '/forgot-password',   component: ForgotPasswords },
    ResetPasswords   : { path: '/reset-password',    component: ResetPasswords },
    Register         : { path: '/register',          component: Register },
    ServerError      : { path: '/500',               component: ServerError },
    Tables           : { path: '/tables',            component: Tables },
    Todos            : { path: '/todos',             component: Todos },
    Notification     : { path: '/notification',      component: Notification },
    Pagination       : { path: '/pagination',        component: Pagination },
    Popover          : { path: '/popover',           component: Popover },
    PopConfirm       : { path: '/pop-confirm',       component: PopConfirm },
    Rating           : { path: '/rating',            component: Rating },
    ReactDates       : { path: '/react-dates',       component: ReactDates },
    Tag              : { path: '/tag',               component: Tag },
    Timeline         : { path: '/timeline',          component: Timeline },
    Tooltip          : { path: '/tooltip',           component: Tooltip },
    Tree             : { path: '/tree',              component: Tree },
    UppyUploader     : { path: '/uppy-uploader',     component: UppyUploader },
    Alert            : { path: '/alert',             component: Alert },
    Badge            : { path: '/badge',             component: Badge },
    Card             : { path: '/card',              component: Card },
    Carousel         : { path: '/carousel',          component: Carousel },
    Collapse         : { path: '/collapse',          component: Collapse },
    DropZone         : { path: '/dropzone',          component: DropZone },
    Message          : { path: '/message',           component: Message },
    Modal            : { path: '/modal',             component: Modal },
    BlankPage        : { path: '/blank',             component: BlankPage },
    Recharts         : { path: '/recharts',          component: Recharts },
    Victory          : { path: '/victory',           component: Victory },
  };

const
  PATHS      = [],
  COMPONENTS = [];

forOwn(PAGES, (val, key) => {
  PATHS.push(val.path);
  COMPONENTS.push(val.component);
});

const
  Routes = () => (
    <Switch>
      {
        PATHS.map((path, i) => {
          const PAGE = PAGES[findKey(PAGES, obj => obj.path === path)];
          const COMPONENT = PAGE.component;
          return <Route exact path={path} key={md5(path + i)} component={COMPONENT} />;
        })
      }
      <Route path='/404' component={NotFound} />
      <Redirect from='*' to='/404' />
    </Switch>
  );

export default Routes;
