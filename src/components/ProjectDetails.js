import getTask from './Task';
import { openUpdateTaskModal } from '../event_listners/taskEventListners';

const getProjectDetails = (tasks) => {
  const projectsTasksRow = document.createElement('div');
  projectsTasksRow.classList.add('row', 'project-tasks-row');

  if (tasks === undefined) {
    return [];
  }

  tasks.forEach((task) => {
    projectsTasksRow.appendChild(getTask(task));
  });

  projectsTasksRow.addEventListener('click', (e) => openUpdateTaskModal(e));

  return projectsTasksRow;
};

export default getProjectDetails;
