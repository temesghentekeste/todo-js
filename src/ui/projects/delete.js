const renderDeletedProject = ({ id, name, description }) => {

  const project = document.querySelector(`#${id}`)
  project.remove();
};

export default renderDeletedProject;
