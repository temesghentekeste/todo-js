import getTask from './Task';

const getProjectDetails = (tasks) => {
  if (tasks === undefined) {
    return [];
  }

  // Row for all the tasks
  const projectsTasksRow = document.createElement('div');
  projectsTasksRow.classList.add('row', 'project-tasks-row');

  // Eeach task which is a card is housed in its own column
  tasks.forEach((task) => {
    const cardsColumn = document.createElement('div');
    cardsColumn.classList.add('col-10', 'col-lg-5', 'm-4');
    // Getting a task as a card
    cardsColumn.append(getTask(task));
    projectsTasksRow.appendChild(cardsColumn);
  });

  return projectsTasksRow;
};

export default getProjectDetails;
