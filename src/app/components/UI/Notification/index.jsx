import { notification } from 'antd';

const Notify = (type, message, description) => {
  notification[type]({
    message,
    description,
  });
};

export default Notify;
export { notification };
