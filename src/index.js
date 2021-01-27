import './main.scss';
import './mobile.scss';
import home from './pages/home';
import getDefaultProject from './data/projects';

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
    },
  };
})();

PageCtrl.init();
