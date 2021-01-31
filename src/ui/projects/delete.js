const removeDeletedTask = ({ id }) => {
  const project = document.querySelector(`#${id}`);
  if (project === null || id === undefined) {
    return;
  }
  project.remove();

  const mainProjectHeader = document.querySelector('.main-project-header');
  mainProjectHeader.innerHTML = '';
  
  const UITasksRow = document.querySelector('.project-tasks-row');
  UITasksRow.innerHTML = '';
};

export default removeDeletedTask;
