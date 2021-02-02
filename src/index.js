import './main.scss';
import home from './views/home';
import getFooter from './components/Footer';
import {
  addNewProject,
  renderCurrentProject,
  updateProject,
} from './event_listners/projectEventListners';
import Project from './model/project';
import Db from './data/db';
import renderNewProject from './ui/projects/new';
import renderAllProjects from './ui/projects/all_projects';

import {
  addNewTask,
  deleteTask,
  openUpdateTaskModal,
  updateTask,
} from './event_listners/taskEventListners';
import setCurrentProjectStyle from '../utilities/current_style';

const PageCtrl = (() => {
  // Create container to hold all the page contnets
  const createContainer = () => {
    const contentDiv = document.querySelector('#content');
    const container = document.createElement('div');
    container.id = 'container';
    contentDiv.append(container);
  };

  // Rendre home page
  const renderHome = () => {
    // Default/Current project
    const db = new Db();
    let currentProject = db.getCurrentProject();
    currentProject = currentProject.currentProject;

    home(currentProject);
  };

  // Render projects from the data store
  const renderProjects = () => {
    const projects = new Db().getProjects();
    if (projects.length > 0) {
      renderAllProjects(projects);
      return;
    }

    // Initialize and render default project
    const defaultProject = new Project(
      'Default Project',
      'Default Project Description',
      []
    );

    renderNewProject(defaultProject);
    defaultProject.save();
  };

  // Set Footer
  const setFooter = () => {
    const contentDiv = document.querySelector('#content');
    contentDiv.appendChild(getFooter());
  };

  return {
    init() {
      createContainer();
      renderHome();
      renderProjects();
      addNewProject();
      renderCurrentProject();

      updateProject();
      addNewTask();
      openUpdateTaskModal();
      updateTask();
      deleteTask();
      // Style current project on the UI
      setCurrentProjectStyle(new Db().getCurrentProject().currentProject.id);
      setFooter();
    },
  };
})();

PageCtrl.init();
