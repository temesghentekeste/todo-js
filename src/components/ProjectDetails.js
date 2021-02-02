import getTask from './Task';

const getProjectDetails = (tasks) => {
  const projectsTasksRow = document.createElement('div');
  projectsTasksRow.classList.add('row', 'project-tasks-row');

  if (tasks === undefined) {
    return [];
  }

  tasks.forEach((task) => {
    projectsTasksRow.appendChild(getTask(task));
  });
  return projectsTasksRow;
};

export default getProjectDetails;
