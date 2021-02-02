import getProjectHeader from './ProjectHeader';
import getProjectDetails from './ProjectDetails';

const main = ({ name, description, tasks }) => {
  const UIMain = document.createElement('main');
  UIMain.classList.add('col-9', 'py-3', 'bg-dark', 'text-white');

  UIMain.append(getProjectHeader(name, description));

  const tasksContainer = document.createElement('div');
  tasksContainer.classList.add(
    'container',
    'project-tasks-container',
    'mt-5',
    'pb-2',
    'mx-4',
  );

  const projectDetails = getProjectDetails(tasks);
  tasksContainer.append(projectDetails);

  UIMain.append(tasksContainer);
  return UIMain;
};

export default main;
