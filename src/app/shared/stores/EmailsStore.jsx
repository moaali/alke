import { observable, action, toJS, autorun } from 'mobx';
import { find, remove, filter, omit, forOwn, includes, findIndex } from 'lodash';
import md5 from 'js-md5';
import { Notification } from 'components';
import data from 'shared/models/emails';

class EmailsStore {
  @observable model
  @observable shown
  @observable currentBucket
  @observable currentLabel
  @observable currentEmail
  @observable currentEmailNext
  @observable currentEmailPrev
  @observable searchQuery
  @observable buckets
  @observable labels
  @observable navToggled
  @observable viewerToggled
  @observable labels
  @observable composeOpened

  constructor() {
    this.model            = data;
    this.shown            = this.getEmails();
    this.currentBucket    = 'Inbox';
    this.currentLabel     = null;
    this.currentEmail     = null;
    this.currentEmailNext = null;
    this.currentEmailPrev = null;
    this.navToggled       = false;
    this.viewerToggled    = false;
    this.composeOpened   = false;
    this.searchQuery      = '';

    this.buckets = [
      'Inbox',
      'Sent',
      'Drafts',
      'Trash',
      'Important',
      'Spam',
      'Starred',
      'Archive',
    ];

    this.labels = [
      'Important',
      'Family',
      'Work',
      'Friends',
      'Coworkers',
    ];

    this.labelsColors = [
      '#d10000',
      '#2980B9',
      '#96CA2D',
      '#EA2E49',
      '#1A1F2B',
    ];

    autorun(() => {
      this.updateShown();
    });
  }

  getEmails() {
    return this.model;
  }

  getShown() {
    return this.shown;
  }

  getEmail(target, id) {
    return find(target, { id });
  }

  getBuckets() {
    return this.buckets;
  }

  getLabels() {
    return this.labels;
  }

  getLabelColor(label) {
    return this.labelsColors[this.labels.indexOf(label)];
  }

  filterEmailsByLabel(target, label) {
    if (label) {
      return filter(target, email => email.label === label);
    }

    return target;
  }

  filterEmailsByBucket(target, bucket) {
    if (bucket) {
      return filter(target, email => email.bucket === bucket);
    }

    return target;
  }

  filterEmailsByQuery(target, query) {
    if (query) {
      return filter(target, email => {
        const emailProps = omit(email, ['id', 'key', 'cc', 'read']);
        let match = false;

        forOwn(emailProps, value => {
          if (includes(String(value).toLowerCase(), query.toLowerCase())) {
            match = true;
          }
        });

        return match;
      });
    }

    return target;
  }

  getCurrentBucket() {
    return this.currentBucket;
  }

  setCurrentBucket(bucket) {
    this.currentBucket = bucket;
  }

  getCurrentLabel() {
    return this.currentLabel;
  }

  setCurrentLabel(label) {
    this.currentLabel = label;
  }

  getSearchQuery() {
    return this.searchQuery;
  }

  setSearchQuery(query) {
    this.searchQuery = query;
  }

  getCurrentEmail() {
    return this.currentEmail;
  }

  setCurrentEmail(id) {
    this.currentEmail = this.getEmail(this.getEmails(), id);
    id && this.setNextPrev(id);
  }

  getNextToCurrent() {
    return this.currentEmailNext;
  }

  setNextPrev(id) {
    const shown = this.getShown();
    const shownSize = shown.length;
    const currentIdx = shown.indexOf(this.getEmail(shown, id));

    if (shownSize <= 1) {
      this.currentEmailNext = null;
      this.currentEmailPrev = null;
      return;
    }

    if (currentIdx === 0) {
      this.currentEmailNext = shown[currentIdx + 1].id;
      this.currentEmailPrev = null;
      return;
    }

    if (currentIdx === (shownSize - 1)) {
      this.currentEmailNext = null;
      this.currentEmailPrev = shown[currentIdx - 1].id;
      return;
    }

    this.currentEmailNext = shown[currentIdx + 1].id;
    this.currentEmailPrev = shown[currentIdx - 1].id;
  }

  getPrevToCurrent() {
    return this.currentEmailPrev;
  }

  getSize() {
    return this.model.length;
  }

  getLabelSize(label) {
    if (!this.isComposeOpened()) {
      const currentEmails = this.filterEmailsByBucket(this.getEmails(), this.getCurrentBucket());

      if (!label) {
        return currentEmails.length;
      }

      return currentEmails.filter(email => email.label === label).length;
    }
  }

  getBucketSize(bucket) {
    return (filter(this.getEmails(), email => email.bucket === bucket)).length;
  }

  deleteEmail(id) {
    this.model = filter(this.getEmails(), email => email.id !== id);
    Notification('error', 'Deleted Selected Email', '');
  }

  isNavToggled() {
    return this.navToggled;
  }

  toggleNav() {
    this.navToggled = !this.navToggled;
  }

  isViewerToggled() {
    return this.viewerToggled;
  }

  toggleViewer() {
    this.viewerToggled = !this.viewerToggled;
  }

  isComposeOpened() {
    return this.composeOpened;
  }

  openCompose() {
    this.composeOpened = true;
  }

  closeCompose() {
    this.composeOpened = false;
  }

  updateShown() {
    const
      emails         = this.getEmails(),
      emailsByBucket = this.filterEmailsByBucket(emails, this.getCurrentBucket()),
      emailsByLabel  = this.filterEmailsByLabel(emailsByBucket, this.getCurrentLabel()),
      emailsByQuery  = this.filterEmailsByQuery(emailsByLabel, this.getSearchQuery());

    this.shown = emailsByQuery;
  }
}

export default new EmailsStore();
