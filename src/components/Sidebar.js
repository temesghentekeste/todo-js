import { getDefaultProject, getAllProjects } from '../data/projects';

const sidebar = () => {
  const UISidebar = document.createElement('aside');
  UISidebar.classList.add('col-3', 'border');

  const sidebarHeading = document.createElement('h1');
  sidebarHeading.classList.add(
    'mt-5',
    'pb-2',
    'mx-2',
    'border-bottom',
    'font-weight-bold'
  );

  // Projects
  sidebarHeading.textContent = 'Projects';
  UISidebar.appendChild(sidebarHeading);

  // Projects container
  const UIProjectsContainer = document.createElement('div');
  UIProjectsContainer.id = 'projects-container';
  UISidebar.append(UIProjectsContainer);

  // Add project button
  const btnAddProject = document.createElement('button');
  btnAddProject.id = 'btn-add-project';
  btnAddProject.classList.add('btn', 'btn-primary', 'float-right');
  btnAddProject.textContent = 'Add New Project';

  // Set attributes
  btnAddProject.setAttribute('data-toggle', 'modal');
  btnAddProject.setAttribute('data-target', '#projectModal');

  UISidebar.append(btnAddProject);

  return UISidebar;
};

export default sidebar;
