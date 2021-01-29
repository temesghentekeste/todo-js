const getTask = (task) => {
  
  const {
    id, name, description, date, priority,
  } = task;

  const card = document.createElement('div');
  card.classList.add('card', 'text-dark');

  card.innerHTML =  `
  <div class="card-body">
  <h1 class="card-title">${name}</h1>
  </div>
  `;
  
  return card;
};

export default getTask;
