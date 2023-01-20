import resetIndex from './resetIndex.js';

export default class {
  constructor(list) {
    this.list = list;
  }

    addItem = (value) => {
      const ind = this.list.length + 1;
      if (value) {
        value = value.trim();
        const listItem = {
          description: value,
          completed: false,
          index: ind,
        };
        this.list.push(listItem);
        localStorage.setItem('listData', JSON.stringify(this.list));
      }
    }

    removeItem = () => {
      const filtered = this.list.filter((elem) => elem.completed === false);
      this.list = filtered;
      resetIndex(this.list);
      return this.list;
    };
}