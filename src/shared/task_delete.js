import Db from '../data/db';

const removeDeletedTask = (id) => {
  const UITaskCard = document.querySelector(`.card-${id}`);
  if (UITaskCard) {
    const UITaskColumn = UITaskCard.parentElement;
    UITaskColumn.remove();
  }
};

const deleteTask = () => {
  const btnProjectDetails = document.querySelector('.project-tasks-row');

  btnProjectDetails.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete-task')) {
      const taskId = e.target.parentElement.id;
      // Update UI to reflect deleted task
      removeDeletedTask(taskId);

      // Get project from the datastore
      const db = new Db();

      // Remove deleted project from the datastore (LS)
      db.deleteTask(taskId);
    }
  });
};

export default deleteTask;
