const renderUpdatedProject = ({ id, name, description }) => {

  const project = document.querySelector(`#${id}`)
  let html = `<h4 class="mx-3 pb-2 border-bottom">${name}</h4>`;
  project.innerHTML = html;

  const mainProjectHeader = document.querySelector('.main-project-header');
  html = `<h1>${name}</h1>
    <p>${description}</p>
    <button class="update-btn btn btn-primary align-self-end" id="btn-update-project" data-toggle="modal" data-target="#updateProjectModal">
      <i class="fas fa-pencil-alt mr-2"></i>Update Project
    </button>`;
  mainProjectHeader.innerHTML = html;
};

export default renderUpdatedProject;
