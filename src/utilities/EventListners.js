import Project from '../model/project';
import Db from '../data/db';
import renderNewProject from '../ui/projects/new';

// Event Listners
const showAddNewProjectModal = () => {
  const btnAddProject = document.querySelector('#btn-add-project');
  btnAddProject.addEventListener('click', (e) => {
    e.preventDefault();
  });
};

const addNewProject = () => {
  const btnAddNewProject = document.querySelector('#add-project');

  btnAddNewProject.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.querySelector('#project-name').value;
    const desc = document.querySelector('#project-description').value;
    const newProject = new Project(name, desc);
    
    renderNewProject(newProject);
    newProject.save();
    projectModal.querySelector('[data-dismiss="modal"]').click();
  });
};

const renderProject = () => {
  const UIDivProjectsContainer = document.querySelector('#projects-container');

  UIDivProjectsContainer.addEventListener('click', (e) => {
    const selectedProject = e.target;
    const projectName = selectedProject.parentElement
    let id = projectName.getAttribute('id');

    if (id === null) {
      return;
    }

    const db = new Db();
    const project = db.getProject(id);
    console.log('clicked', project, db);
  });
};

export { showAddNewProjectModal, addNewProject, renderProject };
