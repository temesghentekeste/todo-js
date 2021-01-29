import getTask from './Task';

const getTasks = (tasks) => {
  if (tasks === undefined) {
    return [];
  }

  let html = '';

  tasks.forEach((task) => (html += getTask(task)));

  return html;
};

export default getTasks;
