import Project from '../model/project';
import Db from '../data/db';
import renderNewProject from '../ui/projects/new';
import renderUpdatedProject from '../ui/projects/edit';
import renderDeletedProject from '../ui/projects/delete';
import renderAllProjects from '../ui/projects/all_projects';
import setCurrentProjectStyle from '../../utilities/current_style';
import {
  resetAddProjectModal,
  resetUpdateProjectModal,
} from '../../utilities/reset_project_modal';

import getProjectHeader from '../components/ProjectHeader';
import getProjectDetails from '../components/ProjectDetails';
import {
  deleteTask,
  openUpdateTaskModal,
} from './taskEventListners';

const updateProject = () => {
  const btnUpdateProject = document.querySelector('#update-project');
  const btnUpdateDefaultProject = document.querySelector('#btn-update-project');

  btnUpdateProject.addEventListener('click', (e) => {
    e.preventDefault();
    // Get current project
    const name = document.querySelector('#update-project-name').value;
    const desc = document.querySelector('#update-project-description').value;

    // Update project modal
    const updateProjectModal = document.querySelector('#updateProjectModal');
    const project = new Project(name, desc);
    // Validate project input data
    if (!project.validate()) {
      return;
    }

    const db = new Db();
    const updatedProject = db.getCurrentProject().currentProject;
    updatedProject.name = name;
    updatedProject.description = desc;

    // Render updated project in the UI
    renderUpdatedProject(updatedProject);

    // Persist updated project in the datastore (LS)
    db.updateProject(updatedProject);

    // Reset project modal
    resetUpdateProjectModal();

    // Dismiss the modal
    updateProjectModal.querySelector('[data-dismiss="modal"]').click();
  });

  btnUpdateDefaultProject.addEventListener('click', (e) => {
    const db = new Db();
    const { currentProject } = db.getCurrentProject();
    e.preventDefault();

    const UIProjectName = document.querySelector('#update-project-name');
    const UIProjDes = document.querySelector('#update-project-description');

    // Prepare default project for update
    UIProjectName.value = currentProject.name;
    UIProjDes.value = currentProject.description;
  });
};

const deleteProject = () => {
  const btnDeleteProject = document.querySelector('#btn-delete-project');

  btnDeleteProject.addEventListener('click', (e) => {
    e.preventDefault();

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
    const UIDivProjectsContainer = document.querySelector(
      '#projects-container',
    );
    if (UIDivProjectsContainer.childElementCount === 0) {
      const projects = db.getProjects();
      renderAllProjects(projects);
    }

    // Style current project on the UI
    setCurrentProjectStyle(new Db().getCurrentProject().currentProject.id);
  });
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

  deleteProject();
  updateProject();
  openUpdateTaskModal();
  deleteTask();
  return UIMain;
};
// Event Listners

// Add new project on modal save button click
const addNewProject = () => {
  const btnAddNewProject = document.querySelector('#add-project');

  btnAddNewProject.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.querySelector('#project-name').value;
    const desc = document.querySelector('#project-description').value;

    const newProject = new Project(name, desc);

    // Project update modal
    const projectModal = document.querySelector('#projectModal');
    // Validate project input data
    if (!newProject.validate()) {
      return;
    }

    renderNewProject(newProject);
    currentProject(newProject);
    newProject.setCurrentProject();
    newProject.save();
    // Style current project on the UI
    setCurrentProjectStyle(new Db().getCurrentProject().currentProject.id);

    // Reset Modal
    resetAddProjectModal();

    // Dismiss the modal
    projectModal.querySelector('[data-dismiss="modal"]').click();
  });
};

// Render current project
const renderCurrentProject = () => {
  const UIDivProjectsContainer = document.querySelector('#projects-container');

  UIDivProjectsContainer.addEventListener('click', (e) => {
    const selectedProject = e.target;
    const projectName = selectedProject.parentElement;
    const id = projectName.getAttribute('id');

    if (id === null) {
      return;
    }

    const db = new Db();
    const project = db.getProject(id);
    if (project !== undefined) {
      currentProject(project);
      db.setCurrentProject(project);
      const UIProjectName = document.querySelector('#update-project-name');
      const UIProjDes = document.querySelector('#update-project-description');

      // Prepare update project modal for updating
      UIProjectName.value = project.name;
      UIProjDes.value = project.description;

      // Style current project on the UI
      setCurrentProjectStyle(id);
    }
  });
};

export {
  addNewProject,
  renderCurrentProject,
  updateProject,
  deleteProject,
  currentProject,
};
