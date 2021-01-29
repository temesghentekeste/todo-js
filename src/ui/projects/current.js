import getProjectHeader from '../../components/ProjectHeader';
import getTasks from '../../components/Tasks';
import { deleteProject } from '../../utilities/EventListners';

const currentProject = (project) => {
  const UIMain = document.querySelector('main');
  UIMain.innerHTML = '';
  const { name, description, tasks } = project;

  // Get project header and append it to UIMain DOM element
  UIMain.append(getProjectHeader(name, description));

  // Project tasks
  const tasksContainer = document.createElement('div');
  tasksContainer.classList.add('container', 'mt-5', 'pb-2', 'mx-4');

  tasksContainer.append(getTasks(tasks));
  UIMain.append(tasksContainer);
  deleteProject();
  return UIMain;
};

export default currentProject;
