const createList = (todo, list) => {
  const removeItem = () => {
    const filtered = list.filter((elem) => elem.completed === false);
    list = filtered;
  };

  if (todo.hasChildNodes()) {
    todo.innerHTML = '';
  }
  const template = document.createElement('template');
  template.innerHTML = `<li>
  <h3>Today's To Do</h3>
    <button class="refresh">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/></svg>
    </button>
  </li>`.trim();
  todo.appendChild(template.content.firstElementChild);

  template.innerHTML = `<li>
    <input class="add" type="text" placeholder="Add to your list..."><button class="enter"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
      </svg></button>
  </li>`.trim();
  todo.appendChild(template.content.firstElementChild);

  if (list.length > 0) {
    list.forEach((item) => {
      const {
        description,
      } = item;

      const template = document.createElement('template');
      if (item.completed) {
        template.innerHTML = `<li><span class='complete'><input type="checkbox" checked>${description}</span><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg></span></li>`.trim();
      } else {
        template.innerHTML = `<li><span><input type="checkbox">${description}</span><span class="options"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg></span></li>`.trim();
      }
      todo.appendChild(template.content.firstElementChild);
    });
    const li = document.createElement('li');
    const a = li.appendChild(document.createElement('a'));
    a.href = '/';
    a.innerText = 'Clear all Completed';
    a.classList.add('btn');
    todo.appendChild(li);

    const check = todo.querySelectorAll('input[type="checkbox"]');
    const options = document.querySelectorAll('.options');
    check.forEach((inp) => {
      const par = inp.parentElement;
      inp.addEventListener('click', () => {
        list.forEach((item) => {
          if (item.description === par.innerText) {
            par.classList.toggle('complete');
            item.completed = !item.completed;
          }
        });
      });
    });

    a.addEventListener('click', (e) => {
      e.preventDefault();
      removeItem();
      createList(todo, list);
    });

    options.forEach((option) => {
      const par = option.parentElement;
      option.addEventListener('click', () => {
        const newVal = prompt('Enter New Description');
        list.forEach((item) => {
          if (item.description === par.innerText) {
            item.description = newVal;
            createList(todo, list);
          }
        });
      });
    });
  }

  const refresh = document.querySelector('.refresh');
  const add = document.querySelector('.add');
  const enter = document.querySelector('.enter');

  const ind = list.length;
  const addItem = (value) => {
    const listItem = {
      description: value,
      completed: false,
      index: ind,
    };
    list.push(listItem);
    createList(todo, list);
  };

  add.addEventListener('keypress', (e) => {
    if (e.code === 'Enter') {
      addItem(add.value);
    }
  });

  enter.addEventListener('click', () => {
    addItem(add.value);
  });

  refresh.addEventListener('click', () => {
    window.location.reload();
  });
};

export default createList;