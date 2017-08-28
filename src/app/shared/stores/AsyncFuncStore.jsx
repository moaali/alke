import { observable } from 'mobx';

class AsyncFuncStore {
  @observable target = null;

  getTarget() {
    return this.target;
  }

  setTarget(target) {
    this.target = target;
  }
}

export default new AsyncFuncStore();
