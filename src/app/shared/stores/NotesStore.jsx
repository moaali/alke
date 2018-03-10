import { observable, autorun } from 'mobx';
import { find } from 'lodash';
import md5 from 'js-md5';
import { Notification } from 'components';

class NotesStore {
  @observable shown
  @observable searchQuery
  @observable currentCategory = 'All'
  @observable currentNote
  @observable categories = [
    {
      name: 'Family',
      color: '#2980B9',
    },
    {
      name: 'Friends',
      color: '#96CA2D',
    },
    {
      name: 'Work',
      color: '#d10000',
    },
    {
      name: 'Uncategorized',
      color: '#EA2E49',
    },
  ]

  @observable notes = [
    {
      id       : '1',
      content  : 'repellendus sunt dolores architecto voluptatum',
      date     : '2017-01-26T15:52:07.773Z',
      category : 'Friends',
    },
    {
      id       : '2',
      content  : 'ab voluptatum amet voluptas',
      date     : '2017-01-26T15:52:07.773Z',
      category : 'Work',
    },
    {
      id       : '3',
      content  : 'accusamus eos facilis sint et aut voluptatem',
      date     : '2017-01-26T15:52:07.773Z',
      category : 'Family',
    },
    {
      id       : '4',
      content  : 'quo laboriosam deleniti aut qui',
      date     : '2017-01-26T15:52:07.773Z',
      category : 'Friends',
    },
    {
      id       : '5',
      content  : 'dolorum est consequatur ea mollitia in culpa',
      date     : '2017-01-26T15:52:07.773Z',
      category : 'Family',
    },
    {
      id       : '6',
      content  : 'molestiae ipsa aut voluptatibus pariatur dolor nihil',
      date     : '2017-01-26T15:52:07.773Z',
      category : 'Uncategorized',
    },
    {
      id       : '7',
      content  : 'ullam nobis libero sapiente ad optio sint',
      date     : '2017-01-26T15:52:07.773Z',
      category : 'Uncategorized',
    },
    {
      id       : '8',
      content  : 'suscipit repellat esse quibusdam voluptatem incidunt',
      date     : '2017-01-26T15:52:07.773Z',
      category : 'Family',
    },
  ];

  constructor() {
    this.shown = this.notes;
    this.currentNote = this.notes[0];

    autorun(() => {
      this.updateShown();
    });
  }

  getNotes() {
    return this.notes;
  }

  getShown() {
    return this.shown;
  }

  getCurrentNote() {
    return this.currentNote;
  }

  getNote(target, id) {
    return find(target, { id });
  }

  getCategoryColor(category) {
    return find(this.categories, { name: category }).color;
  }

  getCategories() {
    return this.categories;
  }

  setNoteProp(id, prop, val) {
    this.getNote(this.getNotes(), id)[prop] = val;
  }

  setCurrentNote(id) {
    this.currentNote = this.getNote(this.getNotes(), id);
  }

  setCurrentFirst() {
    this.currentNote = this.getNotes()[0];
  }

  setCurrentCategory(category) {
    this.currentCategory = category;
  }

  setQuery(query) {
    this.searchQuery = query;
  }

  filterNotes(notes, prop, query) {
    if (query) {
      return notes.filter(note => (note[prop]).toLowerCase().includes(query.toLowerCase()));
    }

    return notes;
  }

  countNotes(category = 'All') {
    const notes = this.getNotes();
    const { filterNotes } = this;

    const
      familyNotesCount        = filterNotes(notes, 'category', 'Family').length,
      friendsNotesCount       = filterNotes(notes, 'category', 'Friends').length,
      workNotesCount          = filterNotes(notes, 'category', 'Work').length,
      uncategorizedNotesCount = filterNotes(notes, 'category', 'Uncategorized').length;

    switch (category) {
      case 'Family':
        return familyNotesCount;
      case 'Friends':
        return friendsNotesCount;
      case 'Work':
        return workNotesCount;
      case 'Uncategorized':
        return uncategorizedNotesCount;
      default:
        return notes.length;
    }
  }

  generateId() {
    const DATE = new Date();
    const NOW  = String(DATE.getTime());
    return md5(NOW);
  }

  addNote(content) {
    const { generateId, currentCategory } = this;

    const
      notes = this.getNotes(),
      newNote = {
        content,
        id: generateId(),
        date: new Date(),
        category: currentCategory === 'All' ? 'Uncategorized' : currentCategory,
      };

    notes.unshift(newNote);
    this.currentNote = notes[0];

    Notification('success', 'Added New Note', '');
  }

  delNote(id) {
    const
      notes       = this.getNotes(),
      currentNote = this.getCurrentNote(),
      notesCount  = notes.length,
      currentIdx  = notes.indexOf(currentNote);

    if (currentNote.id === id && notesCount > 1) {
      notes[notesCount - 1] !== currentNote
        ? this.currentNote = notes[currentIdx + 1]
        : this.currentNote = notes[currentIdx - 1];
    }

    this.notes = notes.filter(todo => todo.id !== id);
    Notification('error', 'Note is Deleted', '');
  }

  updateShown() {
    const notes = this.getNotes();
    const { filterNotes, searchQuery } = this;

    const
      familyNotes        = filterNotes(notes, 'category', 'Family'),
      friendsNotes       = filterNotes(notes, 'category', 'Friends'),
      workNotes          = filterNotes(notes, 'category', 'Work'),
      uncategorizedNotes = filterNotes(notes, 'category', 'Uncategorized');

    switch (this.currentCategory) {
      case 'Family':
        this.shown = filterNotes(familyNotes, 'content', searchQuery);
        break;
      case 'Friends':
        this.shown = filterNotes(friendsNotes, 'content', searchQuery);
        break;
      case 'Work':
        this.shown = filterNotes(workNotes, 'content', searchQuery);
        break;
      case 'Uncategorized':
        this.shown = filterNotes(uncategorizedNotes, 'content', searchQuery);
        break;
      default:
        this.shown = filterNotes(this.getNotes(), 'content', searchQuery);
        break;
    }
  }
}

export default new NotesStore();
