import {
  openUpdateProjectModal,
  deleteProject,
  openAddNewTaskModal,
} from '../shared/common';

const getProjectHeader = (name, description) => {
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

  // Container to hold buttons
  const btnsContainer = document.createElement('div');
  btnsContainer.classList.add('d-flex', 'align-self-end');

  // Add task to project btn
  const btnAddTask = document.createElement('button');
  btnAddTask.classList.add('add-task-btn', 'btn', 'btn-success', 'mr-2');

  btnAddTask.id = 'btn-add-task';
  btnAddTask.innerHTML = '<i class="fas fa-plus mr-2"></i>Add Task';

  // Set attributes to open add task to modal
  btnAddTask.setAttribute('data-toggle', 'modal');
  btnAddTask.setAttribute('data-target', '#taskModal');

  btnAddTask.addEventListener('click', openAddNewTaskModal);
  // Append the update btn  to the buttonsContainer
  btnsContainer.append(btnAddTask);

  // Update project btn
  const btnUpdateProject = document.createElement('button');
  btnUpdateProject.classList.add('update-btn', 'btn', 'btn-primary', 'mr-2');

  btnUpdateProject.id = 'btn-update-project';
  btnUpdateProject.innerHTML =
    '<i class="fas fa-pencil-alt mr-2"></i>Update Project';

  // Set attributes to open Update Project Modal
  btnUpdateProject.setAttribute('data-toggle', 'modal');
  btnUpdateProject.setAttribute('data-target', '#updateProjectModal');

  // Append the update btn  to the buttonsContainer
  btnsContainer.append(btnUpdateProject);

  // Delete project btn
  const btnDeleteProject = document.createElement('button');
  btnDeleteProject.classList.add('btn-delete-project', 'btn', 'btn-danger');

  btnDeleteProject.id = 'btn-delete-project';
  btnDeleteProject.innerHTML =
    '<i class="fas fa-trash-alt mr-2"></i>Delete Project';

  // Append the buttons  to the buttonsContainer
  btnsContainer.append(btnDeleteProject);

  // Append project action buttons to the projectHeaderContainer
  projectHeaderContainer.append(btnsContainer);

  // Attach event handler to btns
  btnUpdateProject.addEventListener('click', openUpdateProjectModal);
  btnDeleteProject.addEventListener('click', deleteProject);

  return projectHeaderContainer;
};

export default getProjectHeader;
