import sidebar from '../components/Sidebar';
import main from '../components/Main';
import getProjectModal from '../components/ProjectModal';
import getUpdateProjectModal from '../components/UpdateProjectModal';
import getTaskModal from '../components/TaskModal';
import getUpdateTaskModal from '../components/UpdateTaskModal';

const home = (currentProject) => {
  const container = document.querySelector('#container');

  const UILayoutDiv = document.createElement('div');
  UILayoutDiv.classList.add('container-fluid');

  const UILayoutRow = document.createElement('div');
  UILayoutRow.classList.add('row');
  UILayoutDiv.appendChild(UILayoutRow);

  // Sidebar: aside
  UILayoutRow.appendChild(sidebar());

  // Main: main
  UILayoutRow.appendChild(main(currentProject));

  // Append project modal: insert mode
  container.appendChild(getProjectModal());

  // Append project modal: update mode
  container.appendChild(getUpdateProjectModal());

  // Append task modal: insert mode
  container.appendChild(getTaskModal());

  // Append update task modal: update mode
  container.appendChild(getUpdateTaskModal());
  // Append the container fluid to the main content div
  container.appendChild(UILayoutDiv);
  
};

export default home;
