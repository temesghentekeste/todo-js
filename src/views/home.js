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

  UILayoutRow.appendChild(sidebar());

  UILayoutRow.appendChild(main(currentProject));

  container.appendChild(getProjectModal());

  container.appendChild(getUpdateProjectModal());

  container.appendChild(getTaskModal());

  container.appendChild(getUpdateTaskModal());
  container.appendChild(UILayoutDiv);
};

export default home;
