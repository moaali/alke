import { notification } from 'antd';

/**
 * Function used to create notifications dynamically.
 *
 * @param  {String} type  Type of notification for example `error`, `info`
 * @param  {String} msg   Notification Title
 * @param  {String} descp Notification content
 *
 * @return {void}
 */
const
  doNotification = (type, msg, descp) => {
    notification[type]({
      message     : msg,
      description : descp,
    });
  };

export default doNotification;
