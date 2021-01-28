import Db from '../data/db';
import getTasks from './Tasks';

const main = () => {
  const UIMain = document.createElement('main');
  UIMain.classList.add('col-9', 'py-3', 'bg-dark', 'text-white');

  // Default/Current project
  const db = new Db();
  const { name, description, tasks } = db.getCurrentProject().currentProject;

  // Project Header
  const projectHeaderContainer = document.createElement('div');
  projectHeaderContainer.classList.add(
    'mt-5',
    'pb-2',
    'mx-4',
    'border-bottom',
    'font-weight-bold',
    'd-flex',
    'flex-column',
    'main-project-header'
  );

  const projectNameHeading = document.createElement('h1');
  projectNameHeading.textContent = name;
  const projectDescription = document.createElement('p');
  projectDescription.textContent = description;

  projectHeaderContainer.append(projectNameHeading);
  projectHeaderContainer.append(projectDescription);

  const btnUpdateProject = document.createElement('button');
  btnUpdateProject.classList.add(
    'update-btn',
    'btn',
    'btn-primary',
    'align-self-end'
  );
  btnUpdateProject.id = 'btn-update-project';
  btnUpdateProject.innerHTML = `<i class="fas fa-pencil-alt mr-2"></i>Update Project`;
  // Set attributes to open Update Project Modal
  btnUpdateProject.setAttribute('data-toggle', 'modal');
  btnUpdateProject.setAttribute('data-target', '#updateProjectModal');
  projectHeaderContainer.append(btnUpdateProject);

  UIMain.append(projectHeaderContainer);

  // Project tasks
  const tasksContainer = document.createElement('div');
  tasksContainer.classList.add('container', 'mt-5', 'pb-2', 'mx-4');

  tasksContainer.append(getTasks(tasks));
  UIMain.append(tasksContainer);
  return UIMain;
};

export default main;
