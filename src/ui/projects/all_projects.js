const renderAllProjects = (projects) => {
  const UIDivProjectsContainer = document.querySelector('#projects-container');

  projects.forEach( project => {

    const {id, name} = project;
      const UIDivProjectName = document.createElement('div');
      UIDivProjectName.classList.add('project');
      UIDivProjectName.setAttribute('id', id);

      const h4 = document.createElement('h4');
      h4.classList.add('mx-3', 'pb-2', 'border-bottom');
      h4.textContent = name;
      UIDivProjectName.append(h4);
      UIDivProjectsContainer.append(UIDivProjectName);
  })
};

export default renderAllProjects;
