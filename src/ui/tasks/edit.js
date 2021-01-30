import moment from 'moment';
const renderUpdatedTask = (
  id,
  name,
  description,
  date,
  priority,
  createdAt
) => {
  let html = `
    <div class="card-body">
      <p>
        <button class="btn btn-success btn-block card-title font-weight-bold text-left text-uppercase" type="button" data-toggle="collapse" data-target="#${id}" aria-expanded="false" aria-controls="collapseExample">
          ${name}
        </button>
      </p>
      <div class="task-details collapse" id="${id}">
        <h6 class="card-subtitle mb-2 text-muted">${priority}</h6>
        <p class="card-text">${description}</p>
        <p class="card-text">${date}</p>
        <p class="card-text">${moment(createdAt).fromNow()}</p>
        <button class="btn-update-task card-link btn btn-primary" data-toggle= 'modal' data-target='#updateTaskModal'>
          <i class="fas fa-pencil-alt mr-2"></i>Update Task</button>
        <button class="btn-delete-task card-link btn btn-danger"><i class="fas fa-trash-alt mr-2"></i>Delete Task</button>
      </div>
    </div>
    `;

  return html;
};

export default renderUpdatedTask;
