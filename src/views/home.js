import sidebar from '../components/Sidebar';
import main from '../components/Main';
import getProjectModal from '../components/ProjectModal';
import getUpdateProjectModal from '../components/UpdateProjectModal';


const home = () => {
  const container = document.querySelector('#container');

  const UILayoutDiv = document.createElement('div');
  UILayoutDiv.classList.add('container-fluid');

  const UILayoutRow = document.createElement('div');
  UILayoutRow.classList.add('row');
  UILayoutDiv.appendChild(UILayoutRow);

  // Sidebar: aside
  UILayoutRow.appendChild(sidebar());

  // Main: main
  UILayoutRow.appendChild(main());

  // Append project modal: insert mode
  container.appendChild(getProjectModal());
  container.appendChild(UILayoutDiv);

  // Append project modal: update mode
  container.appendChild(getUpdateProjectModal());
  container.appendChild(UILayoutDiv);
};

export default home;
