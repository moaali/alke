import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { keys } from 'lodash';
import md5 from 'js-md5';

import Dashboard         from 'screens/Dashboard';
import Contacts          from 'screens/Contacts';
import BlankPage         from 'screens/BlankPage';
import Calendar          from 'screens/Calendar';
import MenuLevels        from 'screens/MenuLevels';
import Notes             from 'screens/Notes';
import GoogleMaps        from 'screens/GoogleMaps';
import Shuffle           from 'screens/Shuffle';
import Tables            from 'screens/Tables';
import Email             from 'screens/Email';
import Todos             from 'screens/Todos';

import Checkout          from 'screens/Ecommerce/Checkout';
import Shop              from 'screens/Ecommerce/Shop';
import Cards             from 'screens/Ecommerce/Cards';
import Cart              from 'screens/Ecommerce/Cart';

import Radiobox          from 'screens/Forms/Radiobox';
import Tab               from 'screens/Forms/Tab';
import Transfer          from 'screens/Forms/Transfer';
import ValidatableForms  from 'screens/Forms/ValidatableForms';
import AutoComplete      from 'screens/Forms/AutoComplete';
import Button            from 'screens/Forms/Button';
import Checkbox          from 'screens/Forms/Checkbox';
import Editor            from 'screens/Forms/Editor';
import Inputs            from 'screens/Forms/Inputs';
import Progress          from 'screens/Forms/Progress';

import Login             from 'screens/Pages/Login';
import ForgotPasswords   from 'screens/Pages/ForgotPassword';
import Invoice           from 'screens/Pages/Invoice';
import ResetPasswords    from 'screens/Pages/ResetPassword';
import Register          from 'screens/Pages/Register';
import NotFound          from 'screens/Pages/404';
import ServerError       from 'screens/Pages/500';

import Notification      from 'screens/UIElements/Notification';
import Pagination        from 'screens/UIElements/Pagination';
import PopOver           from 'screens/UIElements/PopOver';
import PopConfirm        from 'screens/UIElements/PopConfirm';
import Rating            from 'screens/UIElements/Rating';
import ReactDates        from 'screens/UIElements/ReactDates';
import Spin              from 'screens/UIElements/Spin';
import Tag               from 'screens/UIElements/Tag';
import Timeline          from 'screens/UIElements/Timeline';
import Tooltip           from 'screens/UIElements/Tooltip';
import Tree              from 'screens/UIElements/Tree';
import UppyUploader      from 'screens/UIElements/UppyUploader';
import Alert             from 'screens/UIElements/Alert';
import Badge             from 'screens/UIElements/Badge';
import Card              from 'screens/UIElements/Card';
import Carousal          from 'screens/UIElements/Carousal';
import CodeMirror        from 'screens/UIElements/CodeMirror';
import Collapse          from 'screens/UIElements/Collapse';
import Dropdown          from 'screens/UIElements/Dropdown';
import DropZone          from 'screens/UIElements/DropZone';
import Message           from 'screens/UIElements/Message';
import Modal             from 'screens/UIElements/Modal';

import Recharts          from 'screens/Charts/Recharts';
import Victory           from 'screens/Charts/Victory';
import GoogleCharts      from 'screens/Charts/GoogleCharts';
import ReactTrend        from 'screens/Charts/ReactTrend';

const
  PAGES = {
    '/'                  : Login,
    '/dashboard'         : Dashboard,
    '/contacts'          : Contacts,
    '/checkout'          : Checkout,
    '/shop'              : Shop,
    '/cards'             : Cards,
    '/cart'              : Cart,
    '/email'             : Email,
    '/radiobox'          : Radiobox,
    '/tab'               : Tab,
    '/transfer'          : Transfer,
    '/validatable-forms' : ValidatableForms,
    '/autocomplete'      : AutoComplete,
    '/button'            : Button,
    '/checkbox'          : Checkbox,
    '/editor'            : Editor,
    '/inputs'            : Inputs,
    '/progress'          : Progress,
    '/googlemaps'        : GoogleMaps,
    '/menu-levels'       : MenuLevels,
    '/notes'             : Notes,
    '/forgot-password'   : ForgotPasswords,
    '/invoice'           : Invoice,
    '/reset-password'    : ResetPasswords,
    '/register'          : Register,
    '/500'               : ServerError,
    '/shuffle'           : Shuffle,
    '/tables'            : Tables,
    '/todos'             : Todos,
    '/notification'      : Notification,
    '/pagination'        : Pagination,
    '/popover'           : PopOver,
    '/pop-confirm'       : PopConfirm,
    '/rating'            : Rating,
    '/react-dates'       : ReactDates,
    '/spin'              : Spin,
    '/tag'               : Tag,
    '/timeline'          : Timeline,
    '/tooltip'           : Tooltip,
    '/tree'              : Tree,
    '/uppy-uploader'     : UppyUploader,
    '/alert'             : Alert,
    '/badge'             : Badge,
    '/card'              : Card,
    '/carousal'          : Carousal,
    '/code-mirror'       : CodeMirror,
    '/collapse'          : Collapse,
    '/dropdown'          : Dropdown,
    '/dropzone'          : DropZone,
    '/message'           : Message,
    '/modal'             : Modal,
    '/blank'             : BlankPage,
    '/calendar'          : Calendar,
    '/recharts'          : Recharts,
    '/victory'           : Victory,
    '/google-charts'     : GoogleCharts,
    '/react-trend'       : ReactTrend,
  };

const
  PATHS = keys(PAGES);

// const
//   publicPath  = '/',
//   privatePath = '/dashboard/';

// const
//   routeCodes = {
//     login          : publicPath,
//     register       : `${ publicPath }register`,
//     forgotPassword : `${ publicPath }forgot-password`,
//     resetPassword  : `${ publicPath }reset-password`,
//     serverError    : `${ publicPath }500`,
//     dashboard      : privatePath,
//   };

// const
//   PublicRoute = ({ component: Component, ...rest }) => (
//     <Route
//       render={
//         props => {
//           return <Component auth={Auth0} {...props} />;
//         }
//       }
//       {...rest}
//     />
//   );

// PublicRoute.propTypes = {
//   component : PropTypes.any,
// };

// const
//   RestrictedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
//     <Route
//       render={
//         props => {
//           console.log('=====> isAuthenticated from routes', isAuthenticated)
//           isAuthenticated = true
//           if (isAuthenticated) {
//             return <Component {...props} />;
//           }

//           return (
//             <Redirect
//               to={{
//                 pathname: routeCodes.intro,
//                 state: { from: props.location },
//               }}
//             />
//           );
//         }
//       }
//       {...rest}
//     />
//   );

// RestrictedRoute.propTypes = {
//   component       : PropTypes.func,
//   isAuthenticated : PropTypes.any,
//   location        : PropTypes.object,
// };

// const
//   DoRoute = ({ path, component, ...rest }) => {
//     const
//       Unit = component ? import(component) : null;

//     return (
//       <Route
//         path={path}
//         component={Unit}
//         {...rest}
//       />
//     );
//   };

// DoRoute.propTypes = {
//   path      : PropTypes.string,
//   component : PropTypes.string,
// };

const
  Routes = () => (
    <Switch>
      {
        PATHS.map((path, i) => (
          <Route exact path={path} key={md5(path + i)} component={PAGES[path]} />)
        )
      }
      <Route path='*' component={ NotFound } />
    </Switch>
  );

export default Routes;
