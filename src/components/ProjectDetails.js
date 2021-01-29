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
   
    // Getting a task as a card
    // cardsColumn.append(getTask(task));
    projectsTasksRow.appendChild(getTask(task));
  });

  console.log(projectsTasksRow);
  return projectsTasksRow;
};

export default getProjectDetails;
