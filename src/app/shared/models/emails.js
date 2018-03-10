import faker from 'faker';
import { autobind } from 'core-decorators';
import moment from 'moment';
import md5 from 'js-md5';

const
  buckets = [
    'Inbox',
    'Sent',
    'Drafts',
    'Trash',
    'Important',
    'Spam',
    'Starred',
    'Archive',
  ];

const labels = [
  'Important',
  'Family',
  'Work',
  'Friends',
  'Coworkers',
];

class FakeData {
  constructor(size = 100) {
    this.size = size;
    this.data = [];
  }

  dataModel(index) {
    const
      currentDate = new Date(),
      dateA       = new Date(currentDate.setDate((currentDate.getDate() - 30))),
      dateB       = new Date(currentDate.setDate((currentDate.getDate() + 30))),
      date        = moment(faker.date.between(dateA, dateB));

    return {
      date,
      id      : md5(currentDate + index),
      name    : faker.name.findName(),
      avatar  : faker.image.avatar(),
      cc      : faker.internet.email(),
      email   : faker.internet.email(),
      body    : faker.lorem.sentences(5),
      subject : faker.lorem.sentences(1),
      bucket  : faker.random.arrayElement(buckets),
      label   : faker.random.arrayElement(labels),
      read    : faker.random.boolean(),
    };
  }

  @autobind
  getEmail(index) {
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
  getEmails() {
    const { data, getEmail, size } = this;

    if (data.length < size) {
      let i = size;

      while (i--) {
        getEmail(i);
      }
    }

    return data;
  }

  getSize() {
    return this.size;
  }
}

export default new FakeData(30).getEmails();
