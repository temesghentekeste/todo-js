const renderNewProject = ({ id, name }) => {

  const UIDivProjectsContainer = document.querySelector('#projects-container');

  const UIDivProjectName = document.createElement('div');
  UIDivProjectName.classList.add('project', 'border-bottom', 'py-2');
  UIDivProjectName.setAttribute('id', id);

  const h4 = document.createElement('h4');
  h4.classList.add('mx-3');
  h4.textContent = name;
  UIDivProjectName.append(h4);
  UIDivProjectsContainer.append(UIDivProjectName);
};

export default renderNewProject;
