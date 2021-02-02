const resetAddTaskModal = () => {
  document.querySelector('#task-name').value = '';
  document.querySelector('#task-description').value = '';
  document.querySelector('#task-date').value = '';
  document.querySelector('#task-priority').value = '';
};

const resetUpdateTaskModal = () => {
  document.querySelector('#update-task-name').value = '';
  document.querySelector('#update-task-description').value = '';
  document.querySelector('#update-task-date').value = '';
  document.querySelector('#update-task-priority').value = '';
};

export { resetAddTaskModal, resetUpdateTaskModal };
