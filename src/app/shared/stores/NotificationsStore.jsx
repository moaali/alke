import { observable } from 'mobx';

class NewMessagesStore {
  @observable notifications = [
    {
      id: 1,
      name: 'John Doe',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 2,
      name: 'John Doe',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 3,
      name: 'John Doe',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  getNotifications() {
    return this.notifications;
  }

  countNotifications() {
    return this.notifications.length;
  }
}

export default new NewMessagesStore();
