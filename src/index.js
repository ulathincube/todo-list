import ToDo from './todo';
import './style.css';
import { pushItemToList } from './helper-funcs';

const addTaskButton = document.querySelector('.add-task');
const modal = document.querySelector('.modal');

//   constructor(title, description, dueDate, priority)

const defaultList = [];
const projectsList = [];

const washClothes = new ToDo(
  'wash clothes',
  'Wash my laundry for the week!',
  'tomorrow',
  1
);

washClothes.changePriority();
washClothes.changePriority();

pushItemToList(defaultList, washClothes);

function handleAddTaskClick(event) {
  modal.classList.remove('hidden');
}

addTaskButton.addEventListener('click', handleAddTaskClick);

modal.addEventListener('click', event => {
  if (event.target !== modal) {
    return;
  }
  modal.classList.add('hidden');
});
