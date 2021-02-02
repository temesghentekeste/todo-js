import Task from '../model/task';
import Db from '../data/db';
import renderNewTask from '../ui/tasks/new';
import renderUpdatedTask from '../ui/tasks/edit';
import removeDeletedTask from '../ui/tasks/delete';
import {
  resetAddTaskModal,
  resetUpdateTaskModal,
} from '../../utilities/reset_task_modal';
import { getAlertMessage, removeAlertMessage } from '../../utilities/alert_message';

const { DateTime } = require('luxon');

const addNewTask = (e) => {
  e.preventDefault();

  const name = document.querySelector('#task-name').value;
  const desc = document.querySelector('#task-description').value;
  const date = document.querySelector('#task-date').value;
  const priority = document.querySelector('#task-priority').value;

  const now = DateTime.local();
  let task = new Task(name, desc, date, priority, now);
  const taskModal = document.querySelector('#taskModal');
  if (!task.validate()) {
    removeAlertMessage();
    taskModal.prepend(getAlertMessage());

    return false;
  }

  const db = new Db();
  task = db.saveTask(task);
  renderNewTask(task);

  resetAddTaskModal();
  taskModal.querySelector('[data-dismiss="modal"]').click();
  return true;
};

const deleteTask = () => {
  const btnProjectDetails = document.querySelector('.project-tasks-row');

  btnProjectDetails.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete-task')) {
      const taskId = e.target.parentElement.id;
      removeDeletedTask(taskId);

      const db = new Db();

      db.deleteTask(taskId);
    }
  });
};

const openUpdateTaskModal = (e) => {
  if (
    e !== undefined
    && e.target.getAttribute('data-target') === '#updateTaskModal'
  ) {
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
};

const updateTask = (e) => {
  e.preventDefault();

  const UITaskName = document.querySelector('#update-task-name');
  const taskId = UITaskName.getAttribute('data-id');
  const name = UITaskName.value;
  const description = document.querySelector('#update-task-description').value;
  const date = document.querySelector('#update-task-date').value;
  const priority = document.querySelector('#update-task-priority').value;

  const updateTaskModal = document.querySelector('#updateTaskModal');
  const now = DateTime.local();
  const task = new Task(name, description, date, priority, now);

  if (!task.validate()) {
    removeAlertMessage();
    updateTaskModal.prepend(getAlertMessage());
    return false;
  }
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

  taskCard.addEventListener('click', (e) => deleteTask(e));

  db.updateTask(
    taskId,
    name,
    description,
    priority,
    date,
    currentTask.createdAt,
  );

  resetUpdateTaskModal();
  updateTaskModal.querySelector('[data-dismiss="modal"]').click();
  return true;
};

export {
  addNewTask, openUpdateTaskModal, updateTask, deleteTask,
};
