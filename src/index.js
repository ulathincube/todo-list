import ToDo from './todo';
import './style.css';
import { pushItemToList, displayController } from './helper-funcs';

const addTaskButton = document.querySelector('.add-task');
const modal = document.querySelector('.modal');
const submitTaskButton = document.querySelector('.submit');
const formElement = document.querySelector('.form');
const listElement = document.querySelector('.list');

//   constructor(title, description, dueDate, priority)

const defaultList = [];
const projectsList = [];

const washClothes = new ToDo(
  'wash clothes',
  'Wash my laundry for the week!',
  '08:00',
  1
);

washClothes.changePriority();
washClothes.changePriority();

pushItemToList(defaultList, washClothes);

function handleAddTaskClick(event) {
  modal.classList.remove('hidden');
}

function handleModalClick(event) {
  if (event.target !== modal) {
    return;
  }
  modal.classList.add('hidden');
}

function handleSubmitTaskClick(event) {
  event.preventDefault();
  const inputFields = formElement.querySelectorAll('input');

  // get data
  const inputValues = [];

  for (let i = 0; i < inputFields.length; i++) {
    inputValues.push(inputFields[i].value);
  }

  const [title, description, dueDate, priority] = inputValues;

  const newTask = new ToDo(title, description, dueDate, priority);

  pushItemToList(defaultList, newTask);
  console.log(defaultList);

  displayController(listElement, defaultList);
  modal.classList.add('hidden');
  localStorage.setItem('to-do-list', JSON.stringify(defaultList));
}

function handlePageLoad(event) {
  const listExists = localStorage.getItem('to-do-list');

  if (listExists) {
    const taskList = JSON.parse(listExists);

    console.log(taskList);
    listElement.innerHTML = '';
    displayController(listElement, taskList);
  }
}

addTaskButton.addEventListener('click', handleAddTaskClick);

modal.addEventListener('click', handleModalClick);

submitTaskButton.addEventListener('click', handleSubmitTaskClick);

addEventListener('load', handlePageLoad);
