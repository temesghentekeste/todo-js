import Project from '../model/project';
import Db from '../data/db';
import renderNewProject from '../ui/projects/new';
import renderUpdatedProject from '../ui/projects/edit';
import { currentProject } from '../shared/common';

import setCurrentProjectStyle from '../../utilities/current_style';
import {
  resetAddProjectModal,
  resetUpdateProjectModal,
} from '../../utilities/reset_project_modal';

import {getAlertMessage, removeAlertMessage} from '../../utilities/alert_message';

const updateProject = () => {
  // e.preventDefault();
  // Get current project
  const name = document.querySelector('#update-project-name').value;
  const desc = document.querySelector('#update-project-description').value;

  // Update project modal
  const updateProjectModal = document.querySelector('#updateProjectModal');
  const project = new Project(name, desc);
  // Validate project input data
  if (!project.validate()) {
    removeAlertMessage()
    updateProjectModal.prepend(getAlertMessage());
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
};

// Event Listners
const openAddNewProject = () => {
 removeAlertMessage();
};
// Add new project on modal save button click
const addNewProject = () => {
  const name = document.querySelector('#project-name').value;
  const desc = document.querySelector('#project-description').value;

  const newProject = new Project(name, desc);

  // Project update modal
  const projectModal = document.querySelector('#projectModal');
  // Validate project input data
  if (!newProject.validate()) {
    removeAlertMessage();
    projectModal.prepend(getAlertMessage());

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
  openAddNewProject,
};
