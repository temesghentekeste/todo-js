const getProjectHeader = (name, description) => {
  // Project Header
  const projectHeaderContainer = document.createElement('div');
  projectHeaderContainer.classList.add(
    'mt-5',
    'pb-2',
    'mx-4',
    'border-bottom',
    'font-weight-bold',
    'd-flex',
    'flex-column',
    'main-project-header'
  );

  // Name:h1
  const projectNameHeading = document.createElement('h1');
  projectNameHeading.textContent = name;

  // Description: p
  const projectDescription = document.createElement('p');
  projectDescription.textContent = description;

  projectHeaderContainer.append(projectNameHeading);
  projectHeaderContainer.append(projectDescription);

  // Container to hold buttons
  const btnsContainer = document.createElement('div');
  btnsContainer.classList.add('d-flex', 'align-self-end');

  // Update project btn
  const btnUpdateProject = document.createElement('button');
  btnUpdateProject.classList.add('update-btn', 'btn', 'btn-primary', 'mr-2');

  btnUpdateProject.id = 'btn-update-project';
  btnUpdateProject.innerHTML = `<i class="fas fa-pencil-alt mr-2"></i>Update Project`;

  // Set attributes to open Update Project Modal
  btnUpdateProject.setAttribute('data-toggle', 'modal');
  btnUpdateProject.setAttribute('data-target', '#updateProjectModal');

  // Append the update btn  to the buttonsContainer
  btnsContainer.append(btnUpdateProject);

  // Delete project btn
  const btnDeleteProject = document.createElement('button');
  btnDeleteProject.classList.add('delete-project-btn', 'btn', 'btn-danger');

  btnDeleteProject.id = 'btn-delete-project';
  btnDeleteProject.innerHTML = `<i class="fas fa-trash-alt mr-2"></i>Delete Project`;

  // Append the buttons  to the buttonsContainer
  btnsContainer.append(btnDeleteProject);

  // Append project action buttons to the projectHeaderContainer
  projectHeaderContainer.append(btnsContainer);
  return projectHeaderContainer;
};

export default getProjectHeader;
