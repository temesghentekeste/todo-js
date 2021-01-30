import Task from '../model/task';
import Db from '../data/db';
import renderNewTask from '../ui/tasks/new';
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
    console.log('***********************');
    console.log(task);
    renderNewTask(task);
    db.saveTask(task);

    taskModal.querySelector('[data-dismiss="modal"]').click();
  });
};

export { addNewTask };
