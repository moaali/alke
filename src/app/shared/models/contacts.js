import faker from 'faker';
import { autobind } from 'core-decorators';
import md5 from 'js-md5';

class FakeData {
  constructor(size = 100) {
    this.size = size;
    this.data = [];
  }

  dataModel(index) {
    const
      currentDate = new Date();

    return {
      id        : md5(currentDate + index),
      avatar    : faker.image.avatar(),
      email     : faker.internet.email(),
      firstName : faker.name.firstName(),
      lastName  : faker.name.lastName(),
      note      : faker.lorem.sentences(1),
      mobile    : faker.phone.phoneNumber(),
      home      : faker.phone.phoneNumber(),
      work      : faker.phone.phoneNumber(),
    };
  }

  @autobind
  getContact(index) {
    const { data, dataModel, size } = this;

    if (index < 0 || index > size) {
      return undefined;
    }

    if (data[index] === undefined) {
      data[index] = dataModel(index);
    }

    return data[index];
  }

  @autobind
  getContacts() {
    const { data, getContact, size } = this;

    if (data.length < size) {
      let i = size;

      while (i--) {
        getContact(i);
      }
    }

    return data;
  }

  getSize() {
    return this.size;
  }
}

export default new FakeData(30).getContacts();
