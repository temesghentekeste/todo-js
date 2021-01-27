import { getDefaultProject } from '../data/projects';
import getTasks  from '../components/Tasks';
const main = () => {
  const UIMain = document.createElement('aside');
  UIMain.classList.add('col-9', 'py-3', 'bg-dark', 'text-white');

  // Default project description
  const { name, description, tasks } = getDefaultProject();

  // Project Header
  const projectHeaderContainer = document.createElement('div');
   projectHeaderContainer.classList.add(
     'mt-5',
     'pb-2',
     'mx-4',
     'border-bottom',
     'font-weight-bold'
   );

  const projectNameHeading = document.createElement('h1')
  projectNameHeading.textContent = name;
  const projectDescription = document.createElement('p');
  projectDescription.textContent = description;

  projectHeaderContainer.append(projectNameHeading)
  projectHeaderContainer.append(projectDescription);

  UIMain.append(projectHeaderContainer)

  // Project tasks
  const tasksContainer = document.createElement('div');
  tasksContainer.classList.add('container', 'mt-5', 'pb-2', 'mx-4');

  tasksContainer.append(getTasks(tasks))
  UIMain.append(tasksContainer)
  return UIMain;
};

export default main;
