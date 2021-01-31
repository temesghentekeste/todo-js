import Task from '../model/task';
import Db from '../data/db';
import renderNewTask from '../ui/tasks/new';
import renderUpdatedTask from '../ui/tasks/edit';
import removeDeletedTask from '../ui/tasks/delete';
import {
  resetAddTaskModal,
  resetUpdateTaskModal,
} from '../../utilities/reset_task_modal';

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

    const now = DateTime.local();
    let task = new Task(name, desc, date, priority, now);
    // Validate task
    if (!task.validate()) {
      return false;
    }

    const db = new Db();
    task = db.saveTask(task);
    renderNewTask(task);

    // Reset add task modal
    resetAddTaskModal();
    // Dismiss the modal
    const taskModal = document.querySelector('#taskModal');
    taskModal.querySelector('[data-dismiss="modal"]').click();
    return true;
  });
};

// Open update task modal
const openUpdateTaskModal = () => {
  const btnProjectDetails = document.querySelector('.project-tasks-row');
  btnProjectDetails.addEventListener('click', (e) => {
    if (e.target.getAttribute('data-target') === '#updateTaskModal') {
      const taskId = e.target.parentElement.id;
      let name = e.target.parentNode.parentNode.children[0].textContent;
      name = name.trim().toUpperCase();
      const priority = e.target.parentNode.children[0].textContent;
      const description = e.target.parentNode.children[1].textContent;
      const date = e.target.parentNode.children[2].textContent;
      const createdAt = e.target.parentNode.children[3].textContent;

      const taskName = document.querySelector('#update-task-name');
      taskName.value = name.trim().toUpperCase();
      taskName.setAttribute('data-id', taskId);
      taskName.setAttribute('created-at', createdAt);

      document.querySelector('#update-task-description').value = description;
      document.querySelector('#update-task-date').value = date;
      document.querySelector('#update-task-priority').value = priority;
    }
  });
};

// Render updated task upon click of btnUpdateTask
const updateTask = () => {
  const btnUpdateTask = document.querySelector('#update-task');
  btnUpdateTask.addEventListener('click', (e) => {
    e.preventDefault();

    const UITaskName = document.querySelector('#update-task-name');
    const taskId = UITaskName.getAttribute('data-id');
    const name = UITaskName.value;
    const description = document.querySelector('#update-task-description')
      .value;
    const date = document.querySelector('#update-task-date').value;
    const priority = document.querySelector('#update-task-priority').value;

    // Validate task
    const now = DateTime.local();
    const task = new Task(name, description, date, priority, now);

    if (!task.validate()) {
      return false;
    }
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
      currentTask.createdAt,
    );

    db.updateTask(
      taskId,
      name,
      description,
      priority,
      date,
      currentTask.createdAt,
    );

    // Reset update task modal
    resetUpdateTaskModal();
    // Dismiss the modal
    const updateTaskModal = document.querySelector('#updateTaskModal');
    updateTaskModal.querySelector('[data-dismiss="modal"]').click();
    return true;
  });
};

// Delete Task
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

export {
  addNewTask, openUpdateTaskModal, updateTask, deleteTask,
};
