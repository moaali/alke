import { observable } from 'mobx';
import createHistory from 'history/createBrowserHistory';

class HistoryStore {
  @observable history = createHistory();
  @observable count = 0;

  getHistory() {
    return this.history;
  }

  getCount() {
    return this.count;
  }

  updateCount() {
    this.count++;
  }
}

export default new HistoryStore();
