import getProjectHeader from './ProjectHeader';
import getProjectDetails from './ProjectDetails';

const main = ({ name, description, tasks }) => {
  const UIMain = document.createElement('main');
  UIMain.classList.add('col-9', 'py-3', 'bg-dark', 'text-white');

  // Get project header and append it to UIMain DOM element
  UIMain.append(getProjectHeader(name, description));

  // Project Details
  // Container to house the tasks
  const tasksContainer = document.createElement('div');
  tasksContainer.classList.add(
    'container',
    'project-tasks-container',
    'mt-5',
    'pb-2',
    'mx-4'
  );


  // Append the tasks to tasksContainer as project details
  const projectDetails = getProjectDetails(tasks);
  tasksContainer.append(projectDetails);

  // Append the tasksContainer to the main element
  UIMain.append(tasksContainer);
  return UIMain;
};

export default main;
