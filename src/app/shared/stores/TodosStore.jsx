import { observable, toJS } from 'mobx';
import { find, remove } from 'lodash';
import md5 from 'js-md5';
import { Notification } from 'components';

class TodosStore {
  @observable todos = [
    {
      id         : '1ujsdfjsd',
      todo       : 'repellendus sunt dolores architecto voluptatum',
      createTime : '2017-01-26T15:52:07.773Z',
      color      : 1,
      completed  : true,
    }, {
      id         : '2ujsdfjsd',
      todo       : 'ab voluptatum amet voluptas',
      createTime : '2017-01-26T15:52:07.773Z',
      color      : 3,
      completed  : false,
    }, {
      id         : '3ujsdfjsd',
      todo       : 'accusamus eos facilis sint et aut voluptatem',
      createTime : '2017-01-26T15:52:07.773Z',
      color      : 2,
      completed  : true,
    }, {
      id         : '4ujsdfjsd',
      todo       : 'quo laboriosam deleniti aut qui',
      createTime : '2017-01-26T15:52:07.773Z',
      color      : 3,
      completed  : false,
    }, {
      id         : '5ujsdfjsd',
      todo       : 'dolorum est consequatur ea mollitia in culpa',
      createTime : '2017-01-26T15:52:07.773Z',
      color      : 4,
      completed  : true,
    }, {
      id         : '6ujsdfjsd',
      todo       : 'molestiae ipsa aut voluptatibus pariatur dolor nihil',
      createTime : '2017-01-26T15:52:07.773Z',
      color      : 3,
      completed  : true,
    }, {
      id         : '7ujsdfjsd',
      todo       : 'ullam nobis libero sapiente ad optio sint',
      createTime : '2017-01-26T15:52:07.773Z',
      color      : 3,
      completed  : false,
    }, {
      id         : '8ujsdfjsd',
      todo       : 'suscipit repellat esse quibusdam voluptatem incidunt',
      createTime : '2017-01-26T15:52:07.773Z',
      color      : 4,
      completed  : true,
    }, {
      id         : '9ujsdfjsd',
      todo       : 'adipisci non ad dicta qui amet quaerat doloribus ea',
      createTime : '2017-01-26T15:52:07.773Z',
      color      : 1,
      completed  : false,
    }, {
      id         : '10ujsdfjsd',
      todo       : 'voluptas quo tenetur perspiciatis explicabo natus',
      createTime : '2017-01-26T15:52:07.773Z',
      color      : 2,
      completed  : false,
    },
  ];

  @observable shown          = this.todos
  @observable selectedFilter = 'All';
  @observable isEditMode     = false;
  @observable editTodoId     = null;

  getTodos() {
    return this.todos;
  }

  getTodo(target, id) {
    return find(target, { id });
  }

  getSize() {
    return this.getTodos().length;
  }

  generateId() {
    const DATE = new Date();
    const NOW  = String(DATE.getTime());
    return md5(NOW);
  }

  addTodo(todo) {
    const
      newTodo = {
        todo,
        id         : this.generateId(),
        createTime : new Date(),
        color      : 0,
        completed  : false,
      };

    this.getTodos().unshift(newTodo);
    this.updateShown();
    Notification('success', 'Added new Todo', '');
  }

  toggleCompleted(id) {
    this.getTodo(this.getTodos(), id).completed = !this.getTodo(this.getTodos(), id).completed;
    this.updateShown();
  }

  setProp(target, prop, val) {
    target[prop] = val;
  }

  editTodo(id, newTodo) {
    const todo = this.getTodo(this.getTodos(), id);
    todo.todo = newTodo;
    this.updateShown();
  }

  setEditTodoId(id) {
    this.editTodoId = id;
  }

  getEditTodoId() {
    return this.editTodoId;
  }

  isEdit() {
    return this.isEditMode;
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  deleteTodo(id) {
    this.todos = this.getTodos().filter(todo => todo.id !== id);
    this.updateShown();
    Notification('error', 'Todo Deleted', '');
  }

  completeAll() {
    this.todos.forEach(todo => {
      todo.completed = true;
    });
    Notification('success', 'Time to Chillll out', '');
  }

  deleteCompleted() {
    this.todos = this.todos.filter(todo => todo.completed !== true);
    this.updateShown();
    Notification('error', 'Todo\'s Deleted', '');
  }

  getShown() {
    return this.shown;
  }

  setShown(category) {
    this.selectedFilter = category;
    this.updateShown();
  }

  updateShown() {
    switch (this.selectedFilter) {
      case 'Active':
        this.shown = this.getTodos().filter(todo => todo.completed !== true);
        break;
      case 'Completed':
        this.shown = this.getTodos().filter(todo => todo.completed === true);
        break;
      default:
        this.shown = this.getTodos();
        break;
    }
  }

  countCompleted() {
    return (this.todos.filter(todo => todo.completed === true)).length;
  }
}

export default new TodosStore();
