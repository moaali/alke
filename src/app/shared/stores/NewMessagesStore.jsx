import { observable } from 'mobx';

class NewMessagesStore {
  @observable msg = [
    {
      id: 1,
      name: 'John Doe',
      time: '3 minutes ago',
      img: 'https://randomuser.me/api/portraits/women/1.jpg',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 2,
      name: 'John Doe',
      time: '4 minutes ago',
      img: 'https://randomuser.me/api/portraits/women/2.jpg',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 3,
      name: 'John Doe',
      time: '5 minutes ago',
      img: 'https://randomuser.me/api/portraits/women/3.jpg',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 4,
      name: 'John Doe',
      time: '6 minutes ago',
      img: 'https://randomuser.me/api/portraits/women/4.jpg',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  getMessages() {
    return this.msg;
  }

  countMessages() {
    return this.msg.length;
  }
}

export default new NewMessagesStore();
