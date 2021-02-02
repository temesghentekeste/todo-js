import Db from '../data/db';
import setCurrentProjectStyle from '../../utilities/current_style';
import renderDeletedProject from '../ui/projects/delete';
import renderAllProjects from '../ui/projects/all_projects';
import getProjectDetails from '../components/ProjectDetails';

const openUpdateProjectModal = () => {
  const db = new Db();
  const { currentProject } = db.getCurrentProject();
  // e.preventDefault();

  const UIProjectName = document.querySelector('#update-project-name');
  const UIProjDes = document.querySelector('#update-project-description');

  // Prepare default project for update
  UIProjectName.value = currentProject.name;
  UIProjDes.value = currentProject.description;
};

const deleteProject = () => {
  // e.preventDefault();

  // Get project from the datastore
  const db = new Db();
  const deletedProject = db.getCurrentProject().currentProject;

  // Update UI to reflect deleted project
  renderDeletedProject(deletedProject);

  // Remove deleted project from the datastore (LS)
  db.deleteProject(deletedProject);

  const project = db.getCurrentProject().currentProject;
  // eslint-disable-next-line no-use-before-define
  currentProject(project);

  // Render all projects on the projects container div
  const UIDivProjectsContainer = document.querySelector('#projects-container');
  if (UIDivProjectsContainer.childElementCount === 0) {
    const projects = db.getProjects();
    renderAllProjects(projects);
  }

  // Style current project on the UI
  setCurrentProjectStyle(new Db().getCurrentProject().currentProject.id);
};

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

const currentProject = (project) => {
  const UIMain = document.querySelector('main');
  UIMain.innerHTML = '';
  const { name, description, tasks } = project;

  // Get project header and append it to UIMain DOM element
  UIMain.append(getProjectHeader(name, description));

  // Project tasks
  const tasksContainer = document.createElement('div');
  tasksContainer.classList.add('container', 'mt-5', 'pb-2', 'mx-4');

  tasksContainer.append(getProjectDetails(tasks));
  UIMain.append(tasksContainer);

  return UIMain;
};

export {
  openUpdateProjectModal,
  deleteProject,
  currentProject,
  getProjectHeader,
};
