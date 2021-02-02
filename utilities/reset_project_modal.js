const resetAddProjectModal = () => {
  document.querySelector('#project-name').value = '';
  document.querySelector('#project-description').value = '';
};

const resetUpdateProjectModal = () => {
  document.querySelector('#update-project-name').value = '';
  document.querySelector('#update-project-description').value = '';
};

export { resetAddProjectModal, resetUpdateProjectModal };
