import Task from '../model/task';
import Db from '../data/db';
import renderNewTask from '../ui/tasks/new';
import renderUpdatedTask from '../ui/tasks/edit';
import removeDeletedTask from '../ui/tasks/delete';

const { DateTime } = require('luxon');

// Task event Listners

// Add new project on modal save button click
const addNewTask = () => {
  const btnAddNewTask = document.querySelector('#add-task');

  btnAddNewTask.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.querySelector('#task-name').value;
    const desc = document.querySelector('#task-description').value;
    const date = document.querySelector('#task-date').value;
    const priority = document.querySelector('#task-priority').value;

    const db = new Db();
    let currentProject = db.getCurrentProject();
    currentProject = currentProject.currentProject;

    const now = DateTime.local();

    let task = new Task(name, desc, date, priority, now);
    renderNewTask(task);
    db.saveTask(task);

    // Dismiss the modal
    taskModal.querySelector('[data-dismiss="modal"]').click();
  });
};

// Open update task modal
const openUpdateTaskModal = () => {
  const btnProjectDetails = document.querySelector(`.project-tasks-row`);
  btnProjectDetails.addEventListener('click', (e) => {
    if (e.target.getAttribute('data-target') === '#updateTaskModal') {
      const taskId = e.target.parentElement.id;
      let name = e.target.parentNode.parentNode.children[0].textContent;
      name = name.trim().toUpperCase();
      let priority = e.target.parentNode.children[0].textContent;
      let description = e.target.parentNode.children[1].textContent;
      let date = e.target.parentNode.children[2].textContent;
      let createdAt = e.target.parentNode.children[3].textContent;

      const taskName = document.querySelector('#update-task-name');
      taskName.value = name.trim().toUpperCase();
      taskName.setAttribute('data-id', taskId);
      taskName.setAttribute('created-at', createdAt);

      document.querySelector('#update-task-description').value = description;
      document.querySelector('#update-task-date').value = date;
      document.querySelector('#update-task-priority').value = priority;

      console.log('clicked');
      
    }
  });
};

// Render updated task upon click of btnUpdateTask
const updateTask = () => {
  const btnUpdateTask = document.querySelector('#update-task');
  btnUpdateTask.addEventListener('click', (e) => {
    e.preventDefault();

    let UITaskName = document.querySelector('#update-task-name');
    let taskId = UITaskName.getAttribute('data-id');
    let name = UITaskName.value;
    let description = document.querySelector('#update-task-description').value;
    let date = document.querySelector('#update-task-date').value;
    let priority = document.querySelector('#update-task-priority').value;

    // Retrieve the createdAt field of the current task
    const db = new Db();
    const currentTask = db.getCurrentTask(taskId);
    const taskCard = document.querySelector(`.card-${taskId}`);
    taskCard.innerHTML = renderUpdatedTask(
      taskId,
      name,
      description,
      date,
      priority,
      currentTask.createdAt
    );

    db.updateTask(
      taskId,
      name,
      description,
      priority,
      date,
      currentTask.createdAt
    );
    // Dismiss the modal
    updateTaskModal.querySelector('[data-dismiss="modal"]').click();
  });
};

// Delete Task
const deleteTask = () => {

  const btnProjectDetails = document.querySelector(`.project-tasks-row`);

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

export { addNewTask, openUpdateTaskModal, updateTask, deleteTask };
