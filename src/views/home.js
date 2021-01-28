import sidebar from '../components/Sidebar';
import main from '../components/Main';
import getProjectModal from '../components/ProjectModal';


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

  // Append project modal
  console.log(getProjectModal());
  container.appendChild(getProjectModal());
  container.appendChild(UILayoutDiv);
};

export default home;
