import {
  openUpdateProjectModal,
  deleteProject,
  openAddNewTaskModal,
} from '../shared/common';

const getProjectHeader = (name, description) => {
  const projectHeaderContainer = document.createElement('div');
  projectHeaderContainer.classList.add(
    'mt-5',
    'pb-2',
    'mx-4',
    'border-bottom',
    'font-weight-bold',
    'd-flex',
    'flex-column',
    'main-project-header',
  );

  const projectNameHeading = document.createElement('h1');
  projectNameHeading.textContent = name;

  const projectDescription = document.createElement('p');
  projectDescription.textContent = description;

  projectHeaderContainer.append(projectNameHeading);
  projectHeaderContainer.append(projectDescription);

  const btnsContainer = document.createElement('div');
  btnsContainer.classList.add('d-flex', 'align-self-end');

  const btnAddTask = document.createElement('button');
  btnAddTask.classList.add('add-task-btn', 'btn', 'btn-success', 'mr-2');

  btnAddTask.id = 'btn-add-task';
  btnAddTask.innerHTML = '<i class="fas fa-plus mr-2"></i>Add Task';

  btnAddTask.setAttribute('data-toggle', 'modal');
  btnAddTask.setAttribute('data-target', '#taskModal');

  btnAddTask.addEventListener('click', openAddNewTaskModal);
  btnsContainer.append(btnAddTask);

  const btnUpdateProject = document.createElement('button');
  btnUpdateProject.classList.add('update-btn', 'btn', 'btn-primary', 'mr-2');

  btnUpdateProject.id = 'btn-update-project';
  btnUpdateProject.innerHTML = '<i class="fas fa-pencil-alt mr-2"></i>Update Project';

  btnUpdateProject.setAttribute('data-toggle', 'modal');
  btnUpdateProject.setAttribute('data-target', '#updateProjectModal');

  btnsContainer.append(btnUpdateProject);

  const btnDeleteProject = document.createElement('button');
  btnDeleteProject.classList.add('btn-delete-project', 'btn', 'btn-danger');

  btnDeleteProject.id = 'btn-delete-project';
  btnDeleteProject.innerHTML = '<i class="fas fa-trash-alt mr-2"></i>Delete Project';

  btnsContainer.append(btnDeleteProject);

  projectHeaderContainer.append(btnsContainer);

  btnUpdateProject.addEventListener('click', openUpdateProjectModal);
  btnDeleteProject.addEventListener('click', deleteProject);

  return projectHeaderContainer;
};

export default getProjectHeader;
