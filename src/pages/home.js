const home = () => {
  const container = document.querySelector('#container');

  const UILayoutDiv = document.createElement('div')
  UILayoutDiv.classList.add('container-fluid');

  const UILayoutRow = document.createElement('div')
  UILayoutRow.classList.add('row')
  UILayoutDiv.appendChild(UILayoutRow)
  
  const UISidebar = document.createElement('aside')
  UISidebar.classList.add('col-3')
  UISidebar.textContent = 'Sidebar'
  UILayoutRow.appendChild(UISidebar);

  const UIMainContent = document.createElement('main');
  UIMainContent.classList.add('col-9', 'bg-dark', 'text-white');
  UIMainContent.textContent = 'Main Content';
  UILayoutRow.appendChild(UIMainContent);

  container.appendChild(UILayoutDiv)


};

export default home;
