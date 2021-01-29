import Db from '../data/db';
import getProjectHeader from './ProjectHeader';
import getTasks from './Tasks';

const main = ({ name, description, tasks }) => {
  const UIMain = document.createElement('main');
  UIMain.classList.add('col-9', 'py-3', 'bg-dark', 'text-white');

  
  // Get project header and append it to UIMain DOM element
  UIMain.append(getProjectHeader(name, description));

  // Project tasks
  const tasksContainer = document.createElement('div');
  tasksContainer.classList.add('container', 'mt-5', 'pb-2', 'mx-4');

  tasksContainer.append(getTasks(tasks));
  UIMain.append(tasksContainer);
  return UIMain;
};

export default main;
