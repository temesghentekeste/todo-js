import getTask from "../../components/Task";

const renderNewTask = (task) => {

  const UITasksRow = document.querySelector('.project-tasks-row');

  const taskCard = getTask(task);
  UITasksRow.appendChild(taskCard);
};

export default renderNewTask;
