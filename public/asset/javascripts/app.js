window.onload = () => {

  const baseUrl = "http://localhost:3000/todos";
  const newContainerEl = document.querySelector('#new');
  const progressContainerEl = document.querySelector('#progress');
  const doneContainerEl = document.querySelector('#done');
  getAllTodos();

  function getAllTodos() {
    fetch(baseUrl).then((response) => {
      return response.json()
    }).then((todos) => {
      for (const num in Object.keys(todos)) {
        const getEl = document.createElement('div');
        getEl.className = 'todo';

        const todoIdEl = document.createElement('p');
        todoIdEl.className = 'id';
        todoIdEl.innerText = "TODO-ID: " + todos[num].id;
        getEl.append(todoIdEl);

        const userIdEl = document.createElement('p');
        userIdEl.className = 'userId';
        userIdEl.innerText = "USER-ID: " + todos[num].user_id;
        getEl.append(userIdEl);
  
        const titleEl = document.createElement('p');
        titleEl.className = 'userId';
        titleEl.innerText = "TITLE: " + todos[num].title;
        getEl.append(titleEl);

        const contentEl = document.createElement('p');
        contentEl.className = 'content';
        contentEl.innerText = "CONTENTS: " + todos[num].content;
        getEl.append(contentEl);

        const updatedAtEl = document.createElement('p');
        updatedAtEl.className = 'updatedAt';
        updatedAtEl.innerText = "LAST UPDATED: " + todos[num].updatedAt;
        getEl.append(updatedAtEl);
  
        if (todos[num].status === "New") {
          newContainerEl.append(getEl);
        } else if (todos[num].status === "PROGRESS") {
          progressContainerEl.append(getEl);
        } else {
          doneContainerEl.append(getEl);
        }
      }
    });
  }
}