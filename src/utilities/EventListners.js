import Project from '../model/project';
import Db from '../data/db';
import renderNewProject from '../ui/projects/new';
import renderUpdatedProject from '../ui/projects/edit';
import currentProject from '../ui/projects/current';

// Event Listners

// Add new project on modal save button click
const addNewProject = () => {
  const btnAddNewProject = document.querySelector('#add-project');

  btnAddNewProject.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.querySelector('#project-name').value;
    const desc = document.querySelector('#project-description').value;
    const newProject = new Project(name, desc);
    renderNewProject(newProject);
    newProject.setCurrentProject();
    newProject.save();

    projectModal.querySelector('[data-dismiss="modal"]').click();
  });
};

// Render current project
const renderCurrentProject = () => {
  const UIDivProjectsContainer = document.querySelector('#projects-container');

  UIDivProjectsContainer.addEventListener('click', (e) => {
    const selectedProject = e.target;
    const projectName = selectedProject.parentElement;
    let id = projectName.getAttribute('id');

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
    }
  });
};

const updateProject = () => {
  let btnUpdateProject = document.querySelector('#update-project');
  let btnUpdateDefaultProject = document.querySelector('#btn-update-project');

  btnUpdateProject.addEventListener('click', (e) => {
    // Get current project
    e.preventDefault();
    const db = new Db();
    const name = document.querySelector('#update-project-name').value;
    const desc = document.querySelector('#update-project-description').value;

    let updatedProject = db.getCurrentProject().currentProject;
    updatedProject.name = name;
    updatedProject.description = desc;
    renderUpdatedProject(updatedProject);
    db.updateProject(updatedProject);
    updateProjectModal.querySelector('[data-dismiss="modal"]').click();

  });

  btnUpdateDefaultProject.addEventListener('click', (e) => {
    const db = new Db();
    const currentProject = db.getCurrentProject().currentProject;
    e.preventDefault();

    const UIProjectName = document.querySelector('#update-project-name');
    const UIProjDes = document.querySelector('#update-project-description');

    // Prepare default project for update
    UIProjectName.value = currentProject.name;
    UIProjDes.value = currentProject.description;
  });
};

export { addNewProject, renderCurrentProject, updateProject };
