import getTasks from '../../components/Tasks';

const currentProject = (project) => {
  const UIMain = document.querySelector('main');
  UIMain.innerHTML = '';
  const { name, description, tasks } = project;

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

  // Name:h1
  const projectNameHeading = document.createElement('h1');
  projectNameHeading.textContent = name;

  // Description: p
  const projectDescription = document.createElement('p');
  projectDescription.textContent = description;

  projectHeaderContainer.append(projectNameHeading);
  projectHeaderContainer.append(projectDescription);

  // Update project btn
  const btnUpdateProject = document.createElement('button');
  btnUpdateProject.id = 'btn-update-project';

  btnUpdateProject.classList.add(
    'update-btn',
    'btn',
    'btn-primary',
    'align-self-end'
  );
  btnUpdateProject.innerHTML = `<i class="fas fa-pencil-alt mr-2"></i>Update Project`;
  // Set attributes for Modal
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

export default currentProject;
