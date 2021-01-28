const renderNewProject = ({ name, description }) => {
  console.log(name, description);

  const UIDivProjectsContainer = document.querySelector('#projects-container');

  const UIDivProjectName = document.createElement('div');
  const h4 = document.createElement('h4');
  h4.classList.add('mx-3', 'pb-2', 'border-bottom');
  h4.textContent = name;
  UIDivProjectName.append(h4);
  UIDivProjectsContainer.append(UIDivProjectName);
};

export default renderNewProject;
