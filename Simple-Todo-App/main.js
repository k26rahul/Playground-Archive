let todoList = document.querySelector('.todo-list');
let todoForm = document.querySelector('.todo-form');
let todoInput = document.querySelector('.todo-input');

todoInput.focus();

todoForm.addEventListener('submit', event => {
  event.preventDefault();

  let todoText = todoInput.value;

  if (todoText == '') return;
  todoInput.value = '';

  let li = document.createElement('li');
  li.textContent = todoText;
  todoList.append(li);
});
