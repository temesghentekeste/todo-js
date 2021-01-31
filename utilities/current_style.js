const setCurrentProjectStyle = (id) => {
  const UIDivProjectsContainer = document.querySelector('#projects-container');
  const projects = UIDivProjectsContainer.childNodes;

  projects.forEach((element) => {
    element.classList.remove('current');
    if (element.getAttribute('id') === id) {
      element.classList.add('current');
    }
  });
};

export default setCurrentProjectStyle;
