import './main.scss';
import './mobile.scss';
import home from './views/home';
import {
  showAddNewProjectModal,
  addNewProject,
  renderProject,
} from './utilities/EventListners';

const PageCtrl = (() => {
  const createContainer = () => {
    const contentDiv = document.querySelector('#content');
    const container = document.createElement('div');
    container.id = 'container';
    contentDiv.append(container);
  };

  return {
    init() {
      createContainer();
      home();
      showAddNewProjectModal();
      addNewProject();
      renderProject();
    },
  };
})();

PageCtrl.init();
