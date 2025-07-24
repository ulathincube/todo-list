import ToDo from './todo';
import './style.css';
import { pushItemToList } from './helper-funcs';

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

console.log(defaultList);
