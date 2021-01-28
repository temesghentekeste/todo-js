const renderUpdatedProject = ({ id, name }) => {

  const project = document.querySelector(`#${id}`)
  const html = `<h4 class="mx-3 pb-2 border-bottom">${name}</h4>`;
  project.innerHTML = html;
};

export default renderUpdatedProject;
