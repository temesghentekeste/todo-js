import { getDefaultProject, getAllProjects } from '../data/projects';
const sidebar = () => {
  const UISidebar = document.createElement('aside');
  UISidebar.classList.add('col-3');

  const sidebarHeading = document.createElement('h1');
  sidebarHeading.classList.add(
    'mt-5',
    'pb-2',
    'mx-4',
    'border-bottom',
    'font-weight-bold'
  );

  // Projects
  sidebarHeading.textContent = 'Projects';
  UISidebar.appendChild(sidebarHeading);

  // Default project
  const { name } = getDefaultProject();
  const UIDivProjectName = document.createElement('div');
  const h4 = document.createElement('h4');
  h4.classList.add('mt-2', 'pb-2', 'mx-4', 'border-bottom');
  h4.textContent = name;
  UIDivProjectName.append(h4);
  UISidebar.append(UIDivProjectName);
  
  return UISidebar;
};

export default sidebar;
