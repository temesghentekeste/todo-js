const getTask = (task) => {
  
  const {
    id, name, description, date, priority,
  } = task;

 const taskColumn = document.createElement('div');
 taskColumn.classList.add('col-10', 'col-lg-5', 'm-4');

  const card = document.createElement('div');
  card.classList.add('card', 'text-dark');

  card.innerHTML =  `
  <div class="card-body">
  <h1 class="card-title">${name}</h1>
  </div>
  `;
  taskColumn.append(card)
  return taskColumn;
};

export default getTask;
