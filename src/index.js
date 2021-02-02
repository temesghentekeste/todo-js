import './main.scss';
import home from './views/home';
import getFooter from './components/Footer';
import {
  addNewProject,
  renderCurrentProject,
} from './event_listners/projectEventListners';
import Project from './model/project';
import Db from './data/db';
import renderNewProject from './ui/projects/new';
import renderAllProjects from './ui/projects/all_projects';

import setCurrentProjectStyle from '../utilities/current_style';

const PageCtrl = (() => {
  const createContainer = () => {
    const contentDiv = document.querySelector('#content');
    const container = document.createElement('div');
    container.id = 'container';
    contentDiv.append(container);
  };

  const renderHome = () => {
    const db = new Db();
    let currentProject = db.getCurrentProject();
    currentProject = currentProject.currentProject;

    home(currentProject);
  };

  const renderProjects = () => {
    const projects = new Db().getProjects();
    if (projects.length > 0) {
      renderAllProjects(projects);
      return;
    }

    const defaultProject = new Project(
      'Default Project',
      'Default Project Description',
      [],
    );

    renderNewProject(defaultProject);
    defaultProject.save();
  };

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

      setCurrentProjectStyle(new Db().getCurrentProject().currentProject.id);
      setFooter();
    },
  };
})();

PageCtrl.init();
