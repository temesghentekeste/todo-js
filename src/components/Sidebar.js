const sidebar = () => {
  const UISidebar = document.createElement('aside');
  UISidebar.classList.add('col-3');
  UISidebar.textContent = 'Sidebar';

  return UISidebar;
};

export default sidebar;