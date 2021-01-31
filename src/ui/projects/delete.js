const removeDeletedTask = ({ id }) => {
  const project = document.querySelector(`#${id}`);
  project.remove();

  const mainProjectHeader = document.querySelector('.main-project-header');
  mainProjectHeader.innerHTML = '';
  
  const UITasksRow = document.querySelector('.project-tasks-row');
  UITasksRow.innerHTML = '';
};

export default removeDeletedTask;
