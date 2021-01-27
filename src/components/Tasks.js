import getTask from './Task'
const getTasks = tasks => {
  const projectsTasksRow = document.createElement('div');
  projectsTasksRow.classList.add('row');
  let html = '';

  tasks.forEach( task => html += getTask(task))

  projectsTasksRow.innerHTML = html;
  return projectsTasksRow;
}

export default getTasks;