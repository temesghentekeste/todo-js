import { addNewTask } from '../event_listners/taskEventListners';

const getTaskModal = () => {
  const modal = document.createElement('div');
  modal.innerHTML = `
    <div class="modal fade" id="taskModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Task</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
              <form>

                <div class="form-group">
                  <label for="task-name" class="col-form-label">Task:</label>
                  <input type="text" class="form-control" id="task-name" pattern="^([_A-z0-9]){3,}$" required>
                </div>

                <div class="form-group">
                  <label for="task-description-text" class="col-form-label">Description:</label>
                  <textarea class="form-control" id="task-description"></textarea>
                </div>

                <div class="form-group">
                 <label for="task-date" class="col-form-label">Due Date:</label>
                 <input id='task-date' name='task-date' type="date" class="form-control" required>
                 </div>
                 
                 <div class="form-group">
                  <label for="task-priority" class="col-form-label">Priority:</label>
                    <select name='task-priority' class="form-control" id="task-priority" required>
                      <option value='Low'>Low</option>
                      <option value='Medium'>Medium</option>
                      <option value='High'>High</option>
                    </select>
                </div>

            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary" id="add-task">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  modal
    .querySelector('#add-task')
    .addEventListener('click', (e) => addNewTask(e));
  return modal;
};

export default getTaskModal;
