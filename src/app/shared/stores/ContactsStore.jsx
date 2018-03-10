import { observable, action, toJS } from 'mobx';
import { find, remove, filter, omit, forOwn, includes, findIndex } from 'lodash';
import md5 from 'js-md5';
import { Notification } from 'components';
import UserImage from 'shared/static/images/blank-user.jpg';
import data from 'shared/models/contacts';

class ContactsStore {
  @observable contacts = data;
  @observable matchedContacts;
  @observable shownContactId;
  @observable editMode;

  constructor() {
    this.matchedContacts  = this.contacts;
    this.shownContactId   = this.matchedContacts[0].id;
    this.editMode         = false;
    this.contactsSnapshot = null;
  }

  toggleEditMode() {
    if (!this.isEditMode()) {
      this.contactsSnapshot = toJS(this.contacts);
    } else {
      this.contactsSnapshot = null;
    }

    this.editMode = !this.editMode;
  }

  resetContacts() {
    this.contacts = this.contactsSnapshot.slice(0);
  }

  isEditMode() {
    return this.editMode;
  }

  getContact(id) {
    return find(this.contacts, { id });
  }

  getContactInfo(id, prop) {
    return this.getContact(id)[prop];
  }

  setContactInfo(id, prop, val) {
    this.getContact(id)[prop] = val;
  }

  @action.bound
  getContactName(id) {
    const { firstName = '', lastName = '' } = this.getContact(id);
    return `${firstName} ${lastName}`;
  }

  getContacts() {
    return this.contacts;
  }

  setShown(id) {
    this.shownContactId = id;
  }

  getShown() {
    return this.shownContactId;
  }

  queryContacts(query) {
    this.matchedContacts = filter(this.contacts, contact => {
      const contactPorps = omit(contact, ['note', 'avatar', 'id']);
      let match = false;

      forOwn(contactPorps, (value) => {
        if (includes(value.toLowerCase(), query.toLowerCase())) {
          match = true;
        }
      });

      return match;
    });

    if (query == null || query === '') {
      this.matchedContacts = this.contacts;
    }
  }

  getMatchedContacts() {
    return this.matchedContacts;
  }

  generateId() {
    const DATE = new Date();
    const NOW  = String(DATE.getTime());
    return md5(NOW);
  }

  addContact() {
    const
      contactDetails = {
        id        : this.generateId(),
        avatar    : UserImage,
        firstName : '',
        lastName  : '',
        email     : '',
        mobile    : '',
        home      : '',
        work      : '',
        note      : '',
      };

    this.contacts.unshift(contactDetails);
    this.setShown(contactDetails.id);
  }

  save() {
    // Server-side code should be add here.
    Notification('info', 'Saving to server...', '');
    setTimeout(() => {
      Notification('success', 'Contact Saved', '');
    }, 1000);
  }

  deleteContact(id) {
    const contactsClone = this.contacts.slice(0);
    const matchedClone = this.matchedContacts.slice(0);

    /**
     * Find the next object to the current
     * object with the provided id
     */
    const currContactIdx = findIndex(matchedClone, { id });
    const nextId = matchedClone[currContactIdx + 1] ? matchedClone[currContactIdx + 1].id : null;

    this.contacts = remove(contactsClone, contact => contact.id !== id);
    this.matchedContacts = remove(matchedClone, contact => contact.id !== id);

    this.setShown(nextId);
  }

  countContacts() {
    return this.contacts.length;
  }
}

export default new ContactsStore();
