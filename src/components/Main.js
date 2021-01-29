import Db from '../data/db';
import getProjectHeader from './ProjectHeader';
import getTasks from './Tasks';

const main = ({ name, description, tasks }) => {
  const UIMain = document.createElement('main');
  UIMain.classList.add('col-9', 'py-3', 'bg-dark', 'text-white');

  // Get project header and append it to UIMain DOM element
  UIMain.append(getProjectHeader(name, description));

  // Project tasks
  // Container to house the tasks
  const tasksContainer = document.createElement('div');
  tasksContainer.classList.add(
    'container',
    'project-tasks',
    'mt-5',
    'pb-2',
    'mx-4'
  );

  // Row for all the tasks
  const projectsTasksRow = document.createElement('div');
  projectsTasksRow.classList.add('row', 'project-tasks-row');

  // Get html for all tasks (each task in separate column and card)
  projectsTasksRow.innerHTML = getTasks(tasks);

  // Append the tasks to tasksContainer
  tasksContainer.append(projectsTasksRow);

  // Append the tasksContainer to the main element
  UIMain.append(tasksContainer);
  return UIMain;
};

export default main;
