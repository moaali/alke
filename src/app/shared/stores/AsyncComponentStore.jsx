import { observable } from 'mobx';

class AsyncComponentStore {
  @observable target;

  constructor() {
    this.target = undefined;
  }

  getTarget() {
    return this.target;
  }

  setTarget(target) {
    this.target = target;
  }
}

export default new AsyncComponentStore();
