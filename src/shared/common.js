import Db from '../data/db';
import setCurrentProjectStyle from '../../utilities/current_style';
import renderDeletedProject from '../ui/projects/delete';
import renderAllProjects from '../ui/projects/all_projects';
import getProjectDetails from '../components/ProjectDetails';
import { removeAlertMessage } from '../../utilities/alert_message';

const openUpdateProjectModal = () => {
  removeAlertMessage();
  const db = new Db();
  const { currentProject } = db.getCurrentProject();

  const UIProjectName = document.querySelector('#update-project-name');
  const UIProjDes = document.querySelector('#update-project-description');

  UIProjectName.value = currentProject.name;
  UIProjDes.value = currentProject.description;
};

const deleteProject = () => {
  const db = new Db();
  const deletedProject = db.getCurrentProject().currentProject;

  renderDeletedProject(deletedProject);

  db.deleteProject(deletedProject);

  const project = db.getCurrentProject().currentProject;
  // eslint-disable-next-line no-use-before-define
  currentProject(project);

  const UIDivProjectsContainer = document.querySelector('#projects-container');
  if (UIDivProjectsContainer.childElementCount === 0) {
    const projects = db.getProjects();
    renderAllProjects(projects);
  }

  setCurrentProjectStyle(new Db().getCurrentProject().currentProject.id);
};

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

const currentProject = (project) => {
  const UIMain = document.querySelector('main');
  UIMain.innerHTML = '';
  const { name, description, tasks } = project;

  UIMain.append(getProjectHeader(name, description));

  const tasksContainer = document.createElement('div');
  tasksContainer.classList.add('container', 'mt-5', 'pb-2', 'mx-4');

  tasksContainer.append(getProjectDetails(tasks));
  UIMain.append(tasksContainer);

  return UIMain;
};

const openAddNewTaskModal = () => {
  removeAlertMessage();
};

export {
  openUpdateProjectModal,
  deleteProject,
  currentProject,
  getProjectHeader,
  openAddNewTaskModal,
};
