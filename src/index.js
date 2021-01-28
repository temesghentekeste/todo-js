import './main.scss';
import './mobile.scss';
import home from './views/home';
import {
  showAddNewProjectModal,
  addNewProject,
  renderProject,
} from './utilities/EventListners';
import Project from './model/project';
import Db from './data/db';
import renderNewProject from './ui/projects/new';

const PageCtrl = (() => {
  // Create container to hold all the page contnets
  const createContainer = () => {
    const contentDiv = document.querySelector('#content');
    const container = document.createElement('div');
    container.id = 'container';
    contentDiv.append(container);
  };

  // Render projects from the data store
  const renderProjects = () => {
    const projects = Db.getProjects()
    console.log(projects);
    if (projects.lenght > 0) {
      projects.forEach(project => {
        renderNewProject(project);
      });
      return;
    }

    // Initialize and render default project
    const defaultProject = new Project(
      'Default Project',
      'Default Project Description'
    );
    renderNewProject(defaultProject);
    defaultProject.save();
  };

  return {
    init() {
      createContainer();
      home();
      renderProjects();
      showAddNewProjectModal();
      addNewProject();
      renderProject();
    },
  };
})();

PageCtrl.init();
