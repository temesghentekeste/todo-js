const getTask = (task) => {
  const {
    id, name, description, priority,
  } = task;
  const card = document.createElement('div');
  card.classList.add('card', 'text-dark', 'col-10', 'col-lg-5', 'm-4');
  card.innerHTML =  `
      <div class="card-body">
       <h1 class="card-title">${name}</h1>
      </div>
  `;

  return card;
};

export default getTask;
