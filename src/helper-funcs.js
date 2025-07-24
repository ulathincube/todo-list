function pushItemToList(list, item) {
  list.push(item);
}

function displayController(parentNode, tasks) {
  // create nodes
  const listItemNode = document.createElement('li');
  const titleNode = document.createElement('h3');
  const descriptionNode = document.createElement('p');
  const dueDateNode = document.createElement('p');
  const priorityNode = document.createElement('p');

  // set classes

  listItemNode.className = 'list';
  titleNode.className = 'title';
  descriptionNode.className = 'description';
  dueDateNode.className = 'due-date';
  priorityNode.className = 'priority';

  // set text content

  for (const task of tasks) {
    const { title, description, dueDate, priority } = task;

    titleNode.textContent = title;
    descriptionNode.textContent = description;
    dueDateNode.textContent = dueDate;
    priorityNode.textContent = priority;

    const nodes = [titleNode, descriptionNode, dueDateNode, priorityNode];
    nodes.forEach(node => listItemNode.appendChild(node));
    parentNode.appendChild(listItemNode);
  }
}

export { pushItemToList, displayController };
