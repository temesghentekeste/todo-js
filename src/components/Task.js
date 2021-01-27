const getTask = (task) => {
  const { id, name, description, priority, note, completed } = task;
  return `
    <div class="card text-dark col-5 m-4">
      <div class="card-body">
       <h1 class="card-title">${name}</h1>
      </div>
    </div>
  `;
};

export default getTask;
