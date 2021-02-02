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

import { getAlertMessage, removeAlertMessage } from '../../utilities/alert_message';

const updateProject = () => {
  const name = document.querySelector('#update-project-name').value;
  const desc = document.querySelector('#update-project-description').value;

  const updateProjectModal = document.querySelector('#updateProjectModal');
  const project = new Project(name, desc);
  if (!project.validate()) {
    removeAlertMessage();
    updateProjectModal.prepend(getAlertMessage());
    return;
  }

  const db = new Db();
  const updatedProject = db.getCurrentProject().currentProject;
  updatedProject.name = name;
  updatedProject.description = desc;

  renderUpdatedProject(updatedProject);

  db.updateProject(updatedProject);

  resetUpdateProjectModal();

  updateProjectModal.querySelector('[data-dismiss="modal"]').click();
};

const openAddNewProject = () => {
  removeAlertMessage();
};
const addNewProject = () => {
  const name = document.querySelector('#project-name').value;
  const desc = document.querySelector('#project-description').value;

  const newProject = new Project(name, desc);

  const projectModal = document.querySelector('#projectModal');
  if (!newProject.validate()) {
    removeAlertMessage();
    projectModal.prepend(getAlertMessage());

    return;
  }

  renderNewProject(newProject);
  currentProject(newProject);
  newProject.setCurrentProject();
  newProject.save();
  setCurrentProjectStyle(new Db().getCurrentProject().currentProject.id);

  resetAddProjectModal();

  projectModal.querySelector('[data-dismiss="modal"]').click();
};

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

      UIProjectName.value = project.name;
      UIProjDes.value = project.description;

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
