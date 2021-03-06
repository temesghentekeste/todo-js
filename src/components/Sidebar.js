import { openAddNewProject } from '../event_listners/projectEventListners';

const sidebar = () => {
  const UISidebar = document.createElement('aside');
  UISidebar.classList.add('col-3', 'border', 'border-bottom-0');

  const sidebarHeading = document.createElement('h1');
  sidebarHeading.classList.add(
    'mt-5',
    'pb-2',
    'mx-2',
    'border-bottom',
    'font-weight-bold',
  );

  sidebarHeading.textContent = 'Projects';
  UISidebar.appendChild(sidebarHeading);

  const btnAddProject = document.createElement('button');
  btnAddProject.id = 'btn-add-project';
  btnAddProject.classList.add('btn', 'btn-success', 'float-right');
  btnAddProject.innerHTML = '<i class="fas fa-plus mr-2"></i>Add Project';

  btnAddProject.addEventListener('click', openAddNewProject);
  btnAddProject.setAttribute('data-toggle', 'modal');
  btnAddProject.setAttribute('data-target', '#projectModal');

  sidebarHeading.append(btnAddProject);
  const UIProjectsContainer = document.createElement('div');
  UIProjectsContainer.id = 'projects-container';
  UISidebar.append(UIProjectsContainer);

  return UISidebar;
};

export default sidebar;
