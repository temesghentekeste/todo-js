import Project from '../model/project';
import Db from '../data/db';
import renderNewProject from '../ui/projects/new';

// Event Listners
const showAddNewProjectModal = () => {
  const btnAddProject = document.querySelector('#btn-add-project');
  btnAddProject.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
  });
};

const addNewProject = () => {
  const form = document.querySelector('#add-project');
  form.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('#project-name').value;
    const desc = document.querySelector('#project-description').value;
    const newProject = new Project(name, desc);
    renderNewProject(newProject);
    newProject.save(name, desc);
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

    const project = Db.getProject(id);
    console.log('clicked', project);
  });
};

export { showAddNewProjectModal, addNewProject, renderProject };
