const removeDeletedTask = ({ id }) => {
  const project = document.querySelector(`#${id}`);
  project.remove();

  const mainProjectHeader = document.querySelector('.main-project-header');
  mainProjectHeader.innerHTML = '';
};

export default removeDeletedTask;
