const renderUpdatedProject = ({ id, name, description }) => {

  const project = document.querySelector(`#${id}`)
  let html = `<h4 class="mx-3">${name}</h4>`;
  project.innerHTML = html;

  const mainProjectHeader = document.querySelector('.main-project-header');
  const h1 = mainProjectHeader.querySelector('h1');
  const p = mainProjectHeader.querySelector('p');
  h1.textContent = name;
  p.textContent = description;
};

export default renderUpdatedProject;
