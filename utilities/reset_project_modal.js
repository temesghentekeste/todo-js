const resetAddProjectModal = () => {
  document.querySelector('#project-name').value = '';
  document.querySelector('#project-description').value = '';
};

const resetUpdateProjectModal = () => {
  const name = document.querySelector('#update-project-name');
  console.log('called', name);
  document.querySelector('#update-project-name').value = '';
  document.querySelector('#update-project-description').value = '';
};

export { resetAddProjectModal, resetUpdateProjectModal };
